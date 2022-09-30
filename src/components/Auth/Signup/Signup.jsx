import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/Logo.png';
import AuthContext from '../../../context-store/auth/AuthContext/AuthContext';

const Signup = () => {
  const AuthCTX = useContext(AuthContext);

  const signupFormHandler = (event) => {
    // event.preventDefault();

    AuthCTX.onSignup({
      name: 'Vishal Kumar',
      email: 'kumarvishal880288@gmail.com',
      password: 'Password59@12',
    });
  };
  return (
    <>
      <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md ">
        <div className="px-6 py-4">
          <div className="w-full flex flex-col items-center justify-center h-full">
            <img className="w-24" src={Logo} alt="CodeBackground Logo" />
          </div>

          <h3 className="mt-1 text-xl font-medium text-center text-gray-600 capitalize">
            create account
          </h3>

          <form>
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md   focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                placeholder="Full Name"
                aria-label="Full Name"
              />
            </div>
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
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md   focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                placeholder="Confirm Password"
                aria-label="Confirm Password"
              />
            </div>

            <div className="flex items-center  mt-4">
              <button
                onSubmit={signupFormHandler}
                className="w-full px-4 py-2 leading-5 text-white transition-colors duration-300 transform bg-blue-600 rounded hover:bg-blue-800 focus:outline-none"
                type="button"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>

        <div className="flex items-center justify-center py-4 text-center bg-gray-50 ">
          <span className="text-sm text-gray-600 ">
            Already have an account?
          </span>

          <Link
            to={'/auth/login'}
            className="mx-2 text-sm font-bold text-blue-500 hover:underline"
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default Signup;
