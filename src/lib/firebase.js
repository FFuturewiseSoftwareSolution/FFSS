// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsEeRU4LXweSSK73xvIX3WQuvU8DsVfJs",
  authDomain: "ffuturewise-del.firebaseapp.com",
  projectId: "ffuturewise-del",
  storageBucket: "ffuturewise-del.firebasestorage.app",
  messagingSenderId: "832476644382",
  appId: "1:832476644382:web:bea86621e92d33c96bda0f",
  measurementId: "G-NE34KF6E9D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);