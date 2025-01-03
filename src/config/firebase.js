import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyACcTwzTaSKj434CQEqrSmVh79i57mlU1c",
  authDomain: "fir-course-99ed4.firebaseapp.com",
  projectId: "fir-course-99ed4",
  storageBucket: "fir-course-99ed4.firebasestorage.app",
  messagingSenderId: "149612998677",
  appId: "1:149612998677:web:87d0e122b2dc268b0d1e1c",
  measurementId: "G-0BGE576EFS",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
