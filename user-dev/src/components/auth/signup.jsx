import { useState } from "react";
import "./signup.css";
const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="signup">
      <h1>Sign Up</h1>
      <p>Create a new account</p>

      <input
        type="text"
        name="username"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
          Don't have an account? <a href="/login">Login</a>
        </p>
      </div>

      <button type="submit" className="btn">
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;
