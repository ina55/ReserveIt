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
  apiKey: "AIzaSyDBXzTImX1vP4NTnx9AZpEiHBCS_aLltEs",
  authDomain: "reserveit-88336.firebaseapp.com",
  projectId: "reserveit-88336",
  storageBucket: "reserveit-88336.appspot.com",
  messagingSenderId: "258542648321",
  appId: "1:258542648321:web:e772e7ef2a0d8766e4d400",
  measurementId: "G-9KB3RG7PBY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
// const app = firebase.initializeApp(firebaseConfig);
// const db = app.firestore()
