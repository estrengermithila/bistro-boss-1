// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUiNP85bGr-oMduvOQnutaE2zEFM4I4S4",
  authDomain: "bistro-1-be4ff.firebaseapp.com",
  projectId: "bistro-1-be4ff",
  storageBucket: "bistro-1-be4ff.firebasestorage.app",
  messagingSenderId: "983355168503",
  appId: "1:983355168503:web:90be9eecdff0930657e5f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth