import React, { useState, useEffect } from "react";

function Breathing() {
  const [phase, setPhase] = useState("Inhale");
  const [timer, setTimer] = useState(4); // Initial time for the "Inhale" phase
  const [isRunning, setIsRunning] = useState(true);

  const phases = {
    Inhale: 4,
    Hold: 7,
    Exhale: 8,
  };

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setTimer((prev) => {
          if (prev === 1) {
            // Transition to the next phase
            setPhase((prevPhase) => {
              if (prevPhase === "Inhale") return "Hold";
              if (prevPhase === "Hold") return "Exhale";
              return "Inhale";
            });
            return phases[phase === "Inhale" ? "Hold" : "Exhale"];
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(interval); // Cleanup interval on unmount
    }
  }, [isRunning, phase, phases]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width:'100%',
        height: "70vh",
        backgroundColor: "#f0f8ff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#0077b6" }}>
        {phase}
      </h1>
      <div
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          backgroundColor: "#90e0ef",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "3rem",
          fontWeight: "bold",
          color: "#023e8a",
          animation:
            phase === "Inhale"
              ? "grow 4s ease-in-out"
              : phase === "Hold"
              ? "hold 7s linear"
              : "shrink 8s ease-in-out",
        }}
      >
        {timer}s
      </div>
      <button
        onClick={() => setIsRunning(!isRunning)}
        style={{
          width: "200px",
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#0077b6",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "1rem",
        }}
      >
        {isRunning ? "Pause" : "Resume"}
      </button>

      <style>
        {`
          @keyframes grow {
            from {
              transform: scale(0.8);
            }
            to {
              transform: scale(1.2);
            }
          }
          @keyframes hold {
            from {
              transform: scale(1.2);
            }
            to {
              transform: scale(1.2);
            }
          }
          @keyframes shrink {
            from {
              transform: scale(1.2);
            }
            to {
              transform: scale(0.8);
            }
          }
        `}
      </style>
    </div>
  );
}

export default Breathing;