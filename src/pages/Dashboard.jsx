import { useState, useEffect } from "react";
import "./Dashboard.css";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";

export default function Dashboard() {

  const storedUser = JSON.parse(localStorage.getItem("user"));

  const [zone, setZone] = useState(storedUser?.zone || "Zone A");
  const [editing, setEditing] = useState(false);

  const [riskScore, setRiskScore] = useState(72);
  const [loss, setLoss] = useState(150);
  const [premium, setPremium] = useState(50);

  // 🔥 REAL-TIME SIMULATION
  useEffect(() => {
    const interval = setInterval(() => {
      const newRisk = Math.floor(Math.random() * 40) + 60;
      setRiskScore(newRisk);
      setLoss(Math.floor(newRisk * 2));
      setPremium(newRisk > 80 ? 70 : 50);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // 🔥 COUNT ANIMATION
  const [displayRisk, setDisplayRisk] = useState(0);

  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      start += 2;
      if (start >= riskScore) {
        start = riskScore;
        clearInterval(interval);
      }
      setDisplayRisk(start);
    }, 20);
  }, [riskScore]);

  // GRAPH DATA
  const data = [
    { name: "Mon", risk: 60 },
    { name: "Tue", risk: 70 },
    { name: "Wed", risk: 65 },
    { name: "Thu", risk: 80 },
    { name: "Fri", risk: riskScore }
  ];

  const riskLevel = riskScore > 80 ? "High" : "Low";

  return (
    <div className="dashboard">

      <h1>Dashboard</h1>

      {/* ALERT */}
      <div className="alert">
        ⚠ Live system active — data updating in real-time
      </div>

      {/* MAIN CARDS */}
      <div className="grid">

        <div className="card">
          <h3>📍 Current Zone</h3>

          {editing ? (
            <div className="edit-zone">
              <input value={zone} onChange={(e) => setZone(e.target.value)} />
              <button onClick={() => setEditing(false)}>Save</button>
            </div>
          ) : (
            <>
              <p>{zone}</p>
              <span className="edit" onClick={() => setEditing(true)}>✏️</span>
            </>
          )}
        </div>

        <div className="card">
          <h3>⚠ Risk Level</h3>
          <p className={riskLevel.toLowerCase()}>{riskLevel}</p>
        </div>

        <div className="card">
          <h3>💰 Weekly Premium</h3>
          <p>₹{premium}</p>
        </div>

        <div className="card">
          <h3>📊 Protection Status</h3>
          <p className="active">Active</p>
        </div>

      </div>

      {/* AI INSIGHTS */}
      <div className="grid">

        <div className="card highlight">
          <h3>📊 Today’s Risk Score</h3>
          <p className="big">{displayRisk}%</p>
        </div>

        <div className="card highlight">
          <h3>⏰ Recommended Shift</h3>
          <p className="big">6–10 PM</p>
        </div>

        <div className="card highlight">
          <h3>💸 Potential Loss Avoided</h3>
          <p className="big">₹{loss}</p>
        </div>

      </div>

      {/* GRAPH */}
      <div className="chart-card">
        <h3>📈 Risk Trend</h3>

        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="risk" stroke="#ff9900" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}