import { useContext } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import AuthPage from './components/Auth/AuthForm';
import Home from './components/Home/Home';
import Login from './components/Auth/Login/Login';
import Signup from './components/Auth/Signup/Signup';
import Dashboard from './Dashboard/Dashboard';
import BackgroundCircles from './components/MainBackground/Circles/BackgroundCircles';
import NoMatch from './components/404/NoMatch';
import AuthContext from './context-store/auth/AuthContext/AuthContext';

function App() {
  const AuthCTX = useContext(AuthContext);
  const location = useLocation();

  return (
    <>
      <BackgroundCircles />
      <Routes>
        <Route index element={<Home />} />
        {!AuthCTX.isLogged ? (
          <Route path="auth" element={<AuthPage />}>
            {/* <Route index element={<Login />} /> */}
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        ) : (
          <Route index element={<Home />} />
        )}
        <Route
          path="dashboard"
          element={
            AuthCTX.isLogged ? (
              <Dashboard />
            ) : (
              <Navigate to="/" state={{ from: location }} replace />
            )
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
