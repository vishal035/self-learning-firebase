import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => {
  return (
    <div className="relative flex flex-col justify-center items-center w-screen h-screen top-0 left-0">
      <h1 className="text-6xl invert">404</h1>
      <Link
        to={'/'}
        className="px-6 py-3 text-lg top-4 text-slate-900 hover:scale-110 hover:text-blue-200 bg-blue-600 hover:bg-slate-900 rounded-md transition-all ease-in-out hover:border-[1px] "
      >
        Home
      </Link>
    </div>
  );
};

export default NoMatch;
