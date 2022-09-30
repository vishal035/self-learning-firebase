import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative flex flex-col justify-center items-center w-screen h-screen">
      <Link to={'/auth'} className="font-medium text-6xl invert">
        Login
      </Link>
    </div>
  );
};

export default Home;
