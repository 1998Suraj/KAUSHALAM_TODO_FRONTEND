import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { loginUser } from "../services/authService";
import { setToken } from "../utils/tokenUtils";
import "../assets/styles/login.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      const response = await loginUser({ email, password });
      const { token } = response.data;
      setToken(token);
      setAuth(true);
      navigate("/");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2>Welcome Back</h2>
          <p>Please sign in to continue</p>
        </div>

        {error &&
          <div className="error-message">
            {error}
          </div>}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>

          <button type="submit" className="login-button">
            Sign In
          </button>
        </form>
        <div className="auth-links">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
