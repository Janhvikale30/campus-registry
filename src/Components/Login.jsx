import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./theme.css";

const Login = () => {
  const nav = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    setError("");

    // Email should contain only lowercase letters
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    // Password:
    // minimum 8 characters
    // at least one uppercase
    // at least one special character @ # $
    const passwordPattern = /^(?=.*[A-Z])(?=.*[@#$]).{8,}$/;

    if (!emailPattern.test(email)) {
      setError("Enter a valid email using lowercase letters only.");
      return;
    }

    if (!passwordPattern.test(password)) {
      setError(
        "Password must contain 8 characters, 1 uppercase letter and 1 special character (@, # or $).",
      );
      return;
    }

    nav("/admin-dashboard");
  };

  return (
    <div className="login-wrap">
      <div className="login-card">
        <div className="badge-mark">A</div>

        <h2 className="font-display">Admin Login</h2>
        <p className="subtitle">Login to access your dashboard</p>

        <form onSubmit={handleLogin}>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <small className="hint">Use lowercase email only</small>
          </div>

          <div className="field">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <small className="hint">
              8+ characters, 1 uppercase and 1 special character
            </small>
          </div>

          {error && <div className="error-box">{error}</div>}

          <button type="submit" className="btn-login">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
