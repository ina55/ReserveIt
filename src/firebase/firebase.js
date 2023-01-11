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
  apiKey: "AIzaSyCQTeRk6QV5rK6ZCiQ62ABNKBsBd8KCirk",
  authDomain: "reserveitdb.firebaseapp.com",
  projectId: "reserveitdb",
  storageBucket: "reserveitdb.appspot.com",
  messagingSenderId: "715693680882",
  appId: "1:715693680882:web:700959f37563085217c86b",
  measurementId: "G-SJRT0VM4CG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
// const app = firebase.initializeApp(firebaseConfig);
// const db = app.firestore()
