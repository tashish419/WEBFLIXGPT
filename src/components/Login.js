import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [IsSignedIn, setIsSignedIn] = useState(true);

  const signUpToggle = () => {
    setIsSignedIn(!IsSignedIn);
  };
  return (
    <div className="relative">
      <Header />
      <img
        className="absolute top-0 -z-10"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="banner"
      />
      <form className="absolute w-3/12 p-12 mx-auto my-40 right-0 left-0 bg-black text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold py-4 text-3xl">
          {IsSignedIn ? "Sign In" : "Sign Up"}
        </h1>
        {!IsSignedIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 w-full bg-gray-700 rounded-md"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-gray-700 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-700 rounded-md"
        />
        <button className="w-full bg-red-800 p-2 my-6 rounded-lg">
          {IsSignedIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-2 cursor-pointer" onClick={signUpToggle}>
          {IsSignedIn ? "New to Webflix? Sign up now." : "Already registered?Sign in now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
