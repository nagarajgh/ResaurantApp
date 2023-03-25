// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoOsycQg7L9nAqqmUprauulkXlUbxpAGk",
  authDomain: "restaurent-66dc5.firebaseapp.com",
  projectId: "restaurent-66dc5",
  storageBucket: "restaurent-66dc5.appspot.com",
  messagingSenderId: "829285140563",
  appId: "1:829285140563:web:700ca541ff3091648b5ea6"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth( firebaseApp)

export {firebaseApp, auth};