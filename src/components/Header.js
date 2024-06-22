import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL, SUPPORTED_LANG } from "../utils/constants";
import { toggleGPTSearchView } from "../utils/GPTSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();

  //subscribing to the store
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const showGPTSearch = useSelector((store) => store.GPT?.showGPTSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  //calling this api in Header component because Header is everywhere in my app, so whenever header component load, onAuthStateChanged() api will be called to check whether user is signed in or not
  useEffect(() => {
    // this api will fetch data from firebase->user and gives it as parameter
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // object destructring from user object
        const { uid, email, displayName, photoURL } = user;
        //when user sign in  & sign up it will disptach an action , addUser reducer function will be called and it will mutate the state in userSlice
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        // if user is signed in then navigate him to browse
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGPTSearchPage = () => {
    // Toggle GPT Search Functionality
    dispatch(toggleGPTSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="px-8 pt-2 w-screen bg-gradient-to-b from-black flex justify-between absolute z-10">
      <img className="w-32" src={LOGO_URL} alt="logo" />
      {user && (
        <div className="flex p-2">
          {showGPTSearch && (
            <select
              className="p-2 bg-gray-800 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANG.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="px-4 py-2 bg-purple-700 mx-4 rounded-lg text-white hover:bg-opacity-70"
            onClick={handleGPTSearchPage}
          >
            GPT Search
          </button>
          <img className="w-10 h-10" src={user?.photoURL} alt="userIcon" />
          <button
            className="px-1 pb-2 text-sm text-white"
            onClick={handleSignOut}
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
