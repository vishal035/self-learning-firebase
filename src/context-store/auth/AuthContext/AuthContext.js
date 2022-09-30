import React, { useState, useEffect } from 'react';

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
  };

  const signupHandler = (data) => {
    console.log(data);
    setIsLoggedIn((prev) => true);
    localStorage.setItem('isLoggedIn', JSON.stringify(true));
  };

  const loginHandler = (data) => {
    console.log(data);
    setIsLoggedIn((prev) => true);
    localStorage.setItem('isLoggedIn', JSON.stringify(true));
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
