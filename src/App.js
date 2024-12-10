// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';
import LoginPage from './pages/login';
import IndexPage from './pages/index';
import SignupPage from './pages/SignupPage';
import { getToken } from './utils/tokenUtils';

const App = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const token = getToken();
    if (token) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={auth ? <IndexPage /> : <LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </div>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
