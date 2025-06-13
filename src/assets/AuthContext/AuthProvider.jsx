import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // console.log(user);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOutUser = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        // setLoading(false);
      })
      .catch((error) => {
        // setLoading(false);
        console.log(error);
      });
  };

  useEffect(() => {
    const unsubscribe = () =>
      onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (user) {
      setLoading(false);
    }
  }, [user]);

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    loginUser,
    logOutUser,
  };

  return (
    <div>
      <AuthContext value={authInfo}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
