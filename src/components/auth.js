import { useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // console.log(auth?.currentUser?.photoURL);

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <div className="">
        <input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email.."
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password.."
        />
        <button onClick={signIn}>Sign In</button>

        <button onClick={signInWithGoogle}>Sign In with Google</button>

        <button onClick={logout}>Logout</button>
      </div>
    </>
  );
};
