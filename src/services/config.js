import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "e-comercelumin.firebaseapp.com",
    projectId: "e-comercelumin",
    storageBucket: "e-comercelumin.firebasestorage.app",
    messagingSenderId: "820027185564",
    appId: "1:820027185564:web:961a2a86f5ba2d8a3e1059",
    measurementId: "G-533T5DBP94"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);