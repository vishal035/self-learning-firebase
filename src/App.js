import { Routes, Route } from 'react-router-dom';
import AuthPage from './components/Auth/AuthForm';
import Home from './components/Home/Home';
import Login from './components/Auth/Login/Login';
import Signup from './components/Auth/Signup/Signup';
import BackgroundCircles from './components/MainBackground/Circles/BackgroundCircles';
import NoMatch from './components/404/NoMatch';

function App() {
  return (
    <>
      <BackgroundCircles />
      <Routes>
        <Route index element={<Home />} />
        <Route path="auth" element={<AuthPage />}>
          {/* <Route index element={<Login />} /> */}
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
