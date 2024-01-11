// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPmggwy9OVvAAdUFIoSUleeg5GE6wIIo0",
  authDomain: "react-course-9a105.firebaseapp.com",
  projectId: "react-course-9a105",
  storageBucket: "react-course-9a105.appspot.com",
  messagingSenderId: "114766243251",
  appId: "1:114766243251:web:69b2328d0c0d5db58a57c6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
