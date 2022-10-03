import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthContextProvider } from './context-store/auth/AuthContext/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
// import { Analytics } from './firebase/Firebase';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </AuthContextProvider>
);
