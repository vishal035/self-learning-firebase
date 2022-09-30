import React, { useContext } from 'react';
import AuthContext from '../context-store/auth/AuthContext/AuthContext';

const Dashboard = () => {
  const AuthCTX = useContext(AuthContext);

  return (
    <div className="relative flex flex-col justify-center items-center w-screen h-screen">
      <button
        onClick={AuthCTX.onLogout}
        className="font-medium text-6xl bg-slate-100 w-60 h-60 text-center items-center flex flex-col justify-center rounded-full"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
