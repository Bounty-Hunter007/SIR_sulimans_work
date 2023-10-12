// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATwWoRfnDQ_eBC7d67c7f77szRnPdDVdg",
  authDomain: "signin-up-react-authorization.firebaseapp.com",
  projectId: "signin-up-react-authorization",
  storageBucket: "signin-up-react-authorization.appspot.com",
  messagingSenderId: "310481092119",
  appId: "1:310481092119:web:ea4abc39bf85a11344a652"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

