import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();

  // want to call the api only once when user sign in that's why using useEffect() Hook;
  useEffect(() => {
    // this api will fetch data from firebase->user and gives it as parameter
    onAuthStateChanged(auth, (user) => {
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
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  }, []);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/Browse",
      element: <Browse />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
