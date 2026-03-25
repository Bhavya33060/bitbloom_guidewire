import "./Home.css";

export default function Home() {
  return (
    <div className="home">

      {/* 🔝 NAVBAR */}
      {/* <nav className="navbar">
        <h2 className="logo">BitBloom</h2>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Plans</a>
          <a href="#">Login</a>
          <button className="signup-btn">Sign Up</button>
        </div>
      </nav> */}

      {/* 🔥 HERO SECTION */}
      <section className="hero">
        <h1>Protect Your Daily Income Smartly</h1>
        <p>AI-powered income protection for delivery partners</p>
        <div className="hero-buttons">
          <button className="primary-btn">Get Started</button>
          <button className="secondary-btn">View Plans</button>
        </div>
      </section>

      {/* 🛒 PLAN GRID */}
      <section className="plans">
        <h2>Recommended Protection Plans</h2>

        <div className="plan-grid">
          <div className="plan-card">
            <h3>Basic Plan</h3>
            <p className="price">₹49/week</p>
            <p>Best for low-risk zones</p>
            <button>View Details</button>
          </div>

          <div className="plan-card highlight">
            <h3>Smart Plan</h3>
            <p className="price">₹59/week</p>
            <p>Balanced protection</p>
            <button>View Details</button>
          </div>

          <div className="plan-card">
            <h3>Premium Plan</h3>
            <p className="price">₹79/week</p>
            <p>High-risk coverage</p>
            <button>View Details</button>
          </div>
        </div>
      </section>

      {/* 🧠 AI RECOMMENDATION */}
      <section className="ai-section">
        <h2>Smart Recommendation</h2>
        <div className="ai-card">
          <h3>Best Plan for Your Zone: Smart Plan</h3>
          <p>✔ High rain probability</p>
          <p>✔ Moderate traffic congestion</p>
          <p>✔ Balanced earning stability</p>
        </div>
      </section>

      {/* ⚡ HOW IT WORKS */}
      <section className="how">
        <h2>How It Works</h2>

        <div className="steps">
          <div className="step">
            <h3>📍 Select Zone</h3>
            <p>Choose your working area</p>
          </div>

          <div className="step">
            <h3>🤖 Get AI Insights</h3>
            <p>Risk & earning predictions</p>
          </div>

          <div className="step">
            <h3>🛡 Get Protected</h3>
            <p>Auto claims & income safety</p>
          </div>
        </div>
      </section>

      {/* ⚠ ALERT PREVIEW */}
      <section className="alerts">
        <h2>Live Risk Alerts</h2>
        <div className="alert-box">
          ⚠ Heavy rain expected. Switch to Zone B to avoid income loss.
        </div>
      </section>

      {/* 💬 BENEFITS */}
      <section className="benefits">
        <h2>Why Choose Us?</h2>

        <div className="benefit-grid">
          <div>✔ Income protection during disruptions</div>
          <div>✔ Dynamic pricing based on risk</div>
          <div>✔ Zero-touch claims</div>
          <div>✔ Smart work recommendations</div>
        </div>
      </section>

      {/* 🔚 CTA */}
      <section className="cta">
        <h2>Start Protecting Your Income Today</h2>
        <button className="primary-btn">Sign Up Now</button>
      </section>

    </div>
  );
}