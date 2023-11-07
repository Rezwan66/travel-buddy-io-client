import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import axios from 'axios';

const auth = getAuth(app);
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // observer/spy
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(currentUser);
      console.log('current user', currentUser);
      setLoading(false);
      // if there is a user, then we will issue a token
      if (currentUser) {
        axios
          .post('http://localhost:5000/jwt', loggedUser, {
            withCredentials: true,
          })
          .then(res => {
            console.log('token response', res.data);
          });
      } else {
        axios
          .post('http://localhost:5000/logout', loggedUser, {
            withCredentials: true,
          })
          .then(res => {
            console.log(res.data);
          });
      }
    });

    return () => unSubscribe();
  }, [user?.email]);
  //   console.log(user);

  // create user with email & password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   update user profile with name & photo
  const updateUser = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  //   login user with email & password
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //   log out user
  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };
  //   google sign in
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const authentications = {
    user,
    loading,
    createUser,
    updateUser,
    loginUser,
    logoutUser,
    googleLogin,
  };

  return (
    <AuthContext.Provider value={authentications}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
