// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCS9p0xCAYiCgCqTwiwXfDQ5YoreMO3IlA",
    authDomain: "khe-commerce.firebaseapp.com",
    projectId: "khe-commerce",
    storageBucket: "khe-commerce.appspot.com",
    messagingSenderId: "1075444171782",
    appId: "1:1075444171782:web:5a35199f9c8a77fd4cef87"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }