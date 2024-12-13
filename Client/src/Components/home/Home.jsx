import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
function Home() {
  let navigate = useNavigate();
  return (
    <div className="home">
      {/* Effcio Title and Caption */}
      <div className="title">
        <div className="headingg">Efficio</div>
        <p className="caption">Where Time, Tasks, and Teams Align.</p>
      </div>
      {/* Ready to Take Control of Your Time? */}
      <div className="cta-section">
        <h2 className="cta-title">Ready to Take Control of Your Time?</h2>
        <p className="cta-text">
          Join Effcio today and start optimizing your tasks, managing goals, and
          collaborating seamlessly with your team. Your productivity journey
          begins here.
        </p>
        <button className="cta-button" onClick={() => navigate("/register")}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Home;
