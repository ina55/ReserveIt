import firebase from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDo8V0QqodXRL3y9A7k750LsOEd1m4eAQ4",
  authDomain: "reserveit-e0907.firebaseapp.com",
  databaseURL: "https://reserveit-e0907-default-rtdb.firebaseio.com",
  projectId: "reserveit-e0907",
  storageBucket: "reserveit-e0907.appspot.com",
  messagingSenderId: "144965633398",
  appId: "1:144965633398:web:5b567903beced7ebfbe657",
  measurementId: "G-33B83VR8Z7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
// const app = firebase.initializeApp(firebaseConfig);
// const db = app.firestore()
