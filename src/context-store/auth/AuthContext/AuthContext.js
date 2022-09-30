import React, { useState } from 'react';

const AuthContext = React.createContext({
  isLogged: false,
  onSignup: (data) => {},
  onLogin: (data) => {},
  onLogout: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  const signupHandler = (data) => {
    setIsLoggedIn(true);
  };

  const loginHandler = (data) => {
    setIsLoggedIn(true);
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
