// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs8D9nMRSzNoxtMbsCUrAyEIffcJcdBFA",
  authDomain: "fullstack-e0f77.firebaseapp.com",
  databaseURL: "https://fullstack-e0f77-default-rtdb.firebaseio.com",
  projectId: "fullstack-e0f77",
  storageBucket: "fullstack-e0f77.appspot.com",
  messagingSenderId: "1024138978541",
  appId: "1:1024138978541:web:294d2f57802d48d24758e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDatabase = getDatabase(app);