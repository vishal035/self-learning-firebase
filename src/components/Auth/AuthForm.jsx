import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthPage = () => {
  return (
    <div className="relative z-20 flex top-32 ">
      <Outlet />
    </div>
  );
};

export default AuthPage;
