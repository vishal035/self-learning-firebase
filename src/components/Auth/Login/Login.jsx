import React, { useContext } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import Logo from '../../../assets/Logo.png';
import AuthContext from '../../../context-store/auth/AuthContext/AuthContext';

const Login = () => {
  const AuthCTX = useContext(AuthContext);

  const loginFormHandler = (event) => {
    event.preventDefault();

    AuthCTX.onLogin({
      email: 'kumarvishal880288@gmail.com',
      password: 'Password59@12',
    });

    <Navigate to={'/dashboard'} />;
  };
  return (
    <>
      <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md ">
        <div className="px-6 py-4">
          <div className="w-full flex flex-col items-center justify-center h-full">
            <img className="w-24" src={Logo} alt="CodeBackground Logo" />
          </div>

          <h3 className="mt-1 text-xl font-medium text-center text-gray-600 ">
            Welcome Back
          </h3>

          <p className="mt-1 text-center text-gray-500 ">
            Login or create account
          </p>

          <form onSubmit={loginFormHandler}>
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md   focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                placeholder="Email Address"
                aria-label="Email Address"
              />
            </div>

            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md   focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                placeholder="Password"
                aria-label="Password"
              />
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="text-sm text-gray-600  hover:text-gray-500">
                Forget Password?
              </div>

              <button
                className="px-4 py-2 leading-5 text-white transition-colors duration-300 transform bg-blue-600 rounded hover:bg-blue-800 focus:outline-none"
                type="button"
              >
                Login
              </button>
            </div>
          </form>
        </div>

        <div className="flex items-center justify-center py-4 text-center bg-gray-50 ">
          <span className="text-sm text-gray-600 ">Don't have an account?</span>

          <Link
            to={'/auth/signup'}
            className="mx-2 text-sm font-bold text-blue-500 hover:underline"
          >
            Register
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
