import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

export default function Signup() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    vehicle: "",
    platform: "",
    zone: "",
    hours: "",
    rain: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔥 PASSWORD STRENGTH
  const getStrength = () => {
    const pass = form.password;
    if (pass.length < 6) return "Weak";
    if (pass.match(/[A-Z]/) && pass.match(/[0-9]/)) return "Strong";
    return "Medium";
  };

  const handleNext = () => {
    if (step === 1 && (!form.name || !form.phone || !form.city)) {
      setError("Fill all basic details");
      return;
    }
    if (step === 2 && (!form.vehicle || !form.zone)) {
      setError("Fill work details");
      return;
    }
    setError("");
    setStep(step + 1);
  };

  const handleSubmit = () => {
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    localStorage.setItem("user", JSON.stringify(form));
    navigate("/dashboard");
  };

  return (
    <div className="signup-container">

      <div className="signup-left">
        <h1>BitBloom</h1>
        <p>AI-powered protection for delivery partners</p>
      </div>

      <div className="signup-right">
        <div className="form-card">

          <h2>Create Account</h2>

          {/* STEP INDICATOR */}
          <div className="steps">
            <span className={step === 1 ? "active" : ""}></span>
            <span className={step === 2 ? "active" : ""}></span>
            <span className={step === 3 ? "active" : ""}></span>
          </div>

          {error && <p className="error">{error}</p>}

          {/* STEP 1 */}
          {step === 1 && (
            <>
              <input name="name" placeholder="Full Name" onChange={handleChange} />
              <input name="phone" placeholder="Phone Number" onChange={handleChange} />
              <input name="city" placeholder="City" onChange={handleChange} />

              <button onClick={handleNext}>Next</button>
            </>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <>
              <select name="vehicle" onChange={handleChange}>
                <option value="">Vehicle Type</option>
                <option>Bike</option>
                <option>Cycle</option>
              </select>

              <select name="platform" onChange={handleChange}>
                <option value="">Platform</option>
                <option>Swiggy</option>
                <option>Zomato</option>
              </select>

              <input name="zone" placeholder="Work Zone" onChange={handleChange} />

              <select name="hours" onChange={handleChange}>
                <option value="">Working Hours</option>
                <option>Day</option>
                <option>Night</option>
                <option>Both</option>
              </select>

              <select name="rain" onChange={handleChange}>
                <option value="">Rain-prone area?</option>
                <option>Yes</option>
                <option>No</option>
              </select>

              <button onClick={handleNext}>Next</button>
            </>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <>
              <div className="password-field">
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
                <span onClick={() => setShowPass(!showPass)}>👁️</span>
              </div>

              {/* 🔥 STRENGTH */}
              <p className={`strength ${getStrength().toLowerCase()}`}>
                Strength: {getStrength()}
              </p>

              <input
                type={showPass ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={handleChange}
              />

              <button onClick={handleSubmit}>Create Account</button>
            </>
          )}

        </div>
      </div>
    </div>
  );
}