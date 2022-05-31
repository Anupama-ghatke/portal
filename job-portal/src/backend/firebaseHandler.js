import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBs8D9nMRSzNoxtMbsCUrAyEIffcJcdBFA",
    authDomain: "fullstack-e0f77.firebaseapp.com",
    databaseURL: "https://fullstack-e0f77-default-rtdb.firebaseio.com",
    projectId: "fullstack-e0f77",
    storageBucket: "fullstack-e0f77.appspot.com",
    messagingSenderId: "1024138978541",
    appId: "1:1024138978541:web:294d2f57802d48d24758e4"
};

const app = initializeApp(firebaseConfig);
export const firebaseDatabase = getDatabase(app);
export const firebaseAuth = getAuth(app);