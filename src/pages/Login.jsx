import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    phone: "",
    password: ""
  });

  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      setError("No account found. Please sign up.");
      return;
    }

    if (
      form.phone === user.phone &&
      form.password === user.password
    ) {
      setError("");
      navigate("/dashboard");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="login-container">

      {/* LEFT */}
      <div className="login-left">
        <h1>BitBloom</h1>
        <p>Your protection dashboard is waiting</p>
      </div>

      {/* RIGHT */}
      <div className="login-right">
        <div className="login-card">

          <h2>Login</h2>

          {error && <p className="error">{error}</p>}

          <input
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
          />

          <div className="password-field">
            <input
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
            <span onClick={() => setShowPass(!showPass)}>👁️</span>
          </div>

          <button onClick={handleLogin}>Login</button>

          <p className="link">
            Don’t have an account?{" "}
            <span onClick={() => navigate("/signup")}>Sign Up</span>
          </p>

        </div>
      </div>

    </div>
  );
}