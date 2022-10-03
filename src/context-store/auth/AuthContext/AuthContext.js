import React, { useState, useEffect } from 'react';
import {
  SignupWithEmailAndPassword,
  signinWithEmailAndPassword,
} from '../../../firebase/Firebase';
const AuthContext = React.createContext({
  isLogged: false,
  onSignup: (data) => {},
  onLogin: (data) => {},
  onLogout: () => {},
});

export const AuthContextProvider = (props) => {
  const UserAuthStatus = JSON.parse(localStorage.getItem('isLoggedIn'));
  const [isLoggedIn, setIsLoggedIn] = useState(UserAuthStatus);

  const logoutHandler = () => {
    console.log('Logged out');
    setIsLoggedIn((prev) => false);
    localStorage.setItem('isLoggedIn', JSON.stringify(false));
    localStorage.removeItem('user');
  };

  const signupHandler = (data) => {
    console.log(data);
    SignupWithEmailAndPassword(data.name, data.email, data.password)
      .then((res) => {
        console.log(res);
        // Refactoring response
        const signupResponse = {
          createdAt: res.signupData.metadata.creationTime,
          tokens: res.signupData.stsTokenManager,
          uid: res.signupData.uid,
          email: res.signupData.email,
          user: res.user,
        };
        // console.log(res.signupData);
        console.log(signupResponse);

        // Saving Locally
        localStorage.setItem('user', JSON.stringify(signupResponse));
        localStorage.setItem('isLoggedIn', JSON.stringify(true));

        // Changing the App Auth State
        setIsLoggedIn((prev) => true);
      })
      .catch((error) => console.log(error));
  };

  const loginHandler = (data) => {
    console.log(data);

    signinWithEmailAndPassword(data.email, data.password)
      .then((res) => {
        const loginResponse = {
          lastLogin: res.loginData.metadata.lastSignInTime,
          tokens: res.loginData.stsTokenManager,
          uid: res.loginData.uid,
          email: res.loginData.email,
          user: res.user,
        };
        // console.log(res.loginData);
        console.log(loginResponse);

        // Saving Locally
        localStorage.setItem('user', JSON.stringify(loginResponse));
        localStorage.setItem('isLoggedIn', JSON.stringify(true));

        // Changing the App Auth State
        setIsLoggedIn((prev) => true);
      })
      .catch((error) => console.log(error));
  };

  const AuthContextValue = {
    isLogged: isLoggedIn,
    onSignup: signupHandler,
    onLogin: loginHandler,
    onLogout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={AuthContextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
