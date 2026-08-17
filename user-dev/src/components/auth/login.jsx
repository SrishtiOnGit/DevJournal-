import { useState } from "react";
import "./signup.css";
const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="signup">
      <h1>Sign In</h1>
      <p>Enter Your Login Credentials.</p>

      <input
        type="text"
        name="username"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="login-p">
        <p>
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>

      <button type="submit" className="btn">
        Login
      </button>
    </div>
  );
};

export default SignIn;
