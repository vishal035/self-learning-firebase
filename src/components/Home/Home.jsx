import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context-store/auth/AuthContext/AuthContext';

const Home = () => {
  const AuthCTX = useContext(AuthContext);
  // console.log(AuthCTX.isLogged);

  return (
    <div className="relative flex flex-col justify-center items-center w-screen h-screen">
      <Link
        to={AuthCTX.isLogged ? '/dashboard' : '/auth/login'}
        className="font-medium text-6xl bg-slate-100 w-60 h-60 text-center items-center flex flex-col justify-center rounded-full"
      >
        {AuthCTX.isLogged ? <p className="text-3xl">Dashboard</p> : 'Login'}
      </Link>
    </div>
  );
};

export default Home;
