// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAF__3e0G7duYiJufDLVtW2SHi2_51LRXE",
  authDomain: "remember-me-673c0.firebaseapp.com",
  projectId: "remember-me-673c0",
  storageBucket: "remember-me-673c0.appspot.com",
  messagingSenderId: "1027194512354",
  appId: "1:1027194512354:web:060b2e2719bae9f6be4fbb",
  measurementId: "G-WEQYPDLMNT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
