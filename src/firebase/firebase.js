import firebase from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwi9sp-AM4nUP2zp2SURBHQqO3GJCWjF0",
  authDomain: "burger-queen-app-8f5b4.firebaseapp.com",
  projectId: "burger-queen-app-8f5b4",
  storageBucket: "burger-queen-app-8f5b4.appspot.com",
  messagingSenderId: "997977086026",
  appId: "1:997977086026:web:e139005bfae5427b356eb3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const app = firebase.initializeApp(firebaseConfig);
// const db = app.firestore()
