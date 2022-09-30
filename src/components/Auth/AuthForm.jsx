import React from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';

const AuthPage = () => {
  const location = useLocation();
  return (
    <div className="relative z-20 flex top-32 ">
      {location.pathname === '/auth' && (
        <Navigate to={'/auth/login'} state={{ from: location }} replace />
      )}
      <Outlet />
    </div>
  );
};

export default AuthPage;
