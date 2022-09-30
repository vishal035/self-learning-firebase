import React, { useState } from 'react';

const AuthContext = React.createContext({
  isLogged: false,
  onSignup: (data) => {},
  onLogin: (data) => {},
  onLogout: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const logoutHandler = () => {
    console.log('Logged out');
    setIsLoggedIn((prev) => false);
  };

  const signupHandler = (data) => {
    console.log(data);
    setIsLoggedIn((prev) => true);
  };

  const loginHandler = (data) => {
    console.log(data);
    setIsLoggedIn((prev) => true);
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
