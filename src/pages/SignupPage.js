import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signupUser } from '../services/authService';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const payload = {
      email: email,
      password: password
    };

    try {
      await signupUser(payload);
      // Show success message and redirect to login
      alert('Account created successfully! Please login.');
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Error creating account');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2>Create Account</h2>
          <p>Please fill in your details</p>
        </div>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button type="submit" className="login-button">
            Sign Up
          </button>

          <div className="auth-links">
            Already have an account? <Link to="/login">Sign In</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;