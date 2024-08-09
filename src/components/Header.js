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
  }, [dispatch, navigate]);

  const handleGPTSearchPage = () => {
    // Toggle GPT Search Functionality
    dispatch(toggleGPTSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-44 mx-auto md:mx-0" src={LOGO_URL} alt="logo" />
      {user && (
        <div className="flex p-2 justify-between">
          {showGPTSearch && (
            <select
              className="p-2 m-2 bg-gray-800 text-white"
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
            className="px-4 py-2 bg-purple-700 mx-4 my-2 rounded-lg text-white hover:bg-opacity-70"
            onClick={handleGPTSearchPage}
          >
           {showGPTSearch ? "Home Page" : "GPT Search"} 
          </button>
          <img className="hidden md:block w-12 h-12" src={user?.photoURL} alt="userIcon" />
          <button
            className="font-bold text-white"
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
