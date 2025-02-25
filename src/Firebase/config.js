import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA1HRH0yrlEuj9osy-czzktHxiJeq73QD0",
  authDomain: "dawood-beekeeper.firebaseapp.com",
  projectId: "dawood-beekeeper",
  storageBucket: "dawood-beekeeper.firebasestorage.app",
  messagingSenderId: "815125154159",
  appId: "1:815125154159:web:c6af90fda8df5e2a8e009a"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const firestore = getFirestore(app);