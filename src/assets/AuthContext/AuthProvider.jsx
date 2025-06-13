import React, { useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // console.log(user);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
  };

  return (
    <div>
      <AuthContext value={authInfo}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
