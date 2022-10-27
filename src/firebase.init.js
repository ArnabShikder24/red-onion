// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBV9v6V8TDNAVQBMI3Ak99QDzX97gZFMsU",
  authDomain: "red-onion-19e3b.firebaseapp.com",
  projectId: "red-onion-19e3b",
  storageBucket: "red-onion-19e3b.appspot.com",
  messagingSenderId: "1043755675819",
  appId: "1:1043755675819:web:ccfc5686fa52f5745e87ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;