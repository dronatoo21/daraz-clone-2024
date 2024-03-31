// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMV6-sGJDF8oUZ5MvfiO2ARqyRib9VJM4",
  authDomain: "daraz-clone-2024.firebaseapp.com",
  projectId: "daraz-clone-2024",
  storageBucket: "daraz-clone-2024.appspot.com",
  messagingSenderId: "694043965048",
  appId: "1:694043965048:web:b102d4b48438e287a21f8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;