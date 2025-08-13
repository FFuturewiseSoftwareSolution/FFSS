// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBT-pASUhc8_P7bte8RpuUvWl8UZzkg4tQ",
  authDomain: "ffuturewisesoftwaresolut-1d222.firebaseapp.com",
  projectId: "ffuturewisesoftwaresolut-1d222",
  storageBucket: "ffuturewisesoftwaresolut-1d222.firebasestorage.app",
  messagingSenderId: "790334929757",
  appId: "1:790334929757:web:f7f9f448432bb0af9e86b4",
  measurementId: "G-G6VBEXBBGZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);