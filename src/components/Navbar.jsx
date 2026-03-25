import "./Navbar.css";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbar">

      {/* LEFT - LOGO */}
      <div className="nav-left" onClick={() => navigate("/")}>
        <h2>BitBloom</h2>
      </div>

      {/* CENTER - SEARCH (Amazon style feel) */}
      <div className="nav-center">
        <input type="text" placeholder="Search protection plans..." />
      </div>

      {/* RIGHT - ACTIONS */}
      <div className="nav-right">

        <div className="nav-item" onClick={() => navigate("/")}>
          <span>Hello, User</span>
          <strong>Home</strong>
        </div>

        <div className="nav-item" onClick={() => navigate("/dashboard")}>
          <span>View</span>
          <strong>Dashboard</strong>
        </div>

        <div className="nav-item" onClick={() => navigate("/claims")}>
          <span>Your</span>
          <strong>Claims</strong>
        </div>

        <button onClick={() => navigate("/login")}>Login</button>
       <button onClick={() => navigate("/signup")}>Signup</button>

      </div>

    </div>
  );
}