// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0cdApmsiorUc7xh-hCxDcZtmxlteImoc",
  authDomain: "webflixgpt-b1a3d.firebaseapp.com",
  projectId: "webflixgpt-b1a3d",
  storageBucket: "webflixgpt-b1a3d.appspot.com",
  messagingSenderId: "679286624149",
  appId: "1:679286624149:web:2cc9bd2914049af8d2f09c",
  measurementId: "G-CPVME8TE8C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);