import React, { useState, useEffect } from "react";
import "./Pomodora.css";

export default function Pomodora() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [displayMessage, setDisplayMessage] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes !== 0) {
            setSeconds(59);
            setMinutes((prev) => prev - 1);
          } else {
            // Switch between Work and Break sessions
            const newMinutes = displayMessage ? 24 : 4;
            setMinutes(newMinutes);
            setSeconds(59);
            setDisplayMessage((prev) => !prev);
          }
        } else {
          setSeconds((prev) => prev - 1);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, seconds, minutes, displayMessage]);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  const handleStartStop = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    setMinutes(25);
    setSeconds(0);
    setIsRunning(false);
    setDisplayMessage(false);
  };

  return (
    <div className="pomodoro">
      <h1>Pomodoro Timer</h1>
      <div className="message ">
        {displayMessage && <div>Break time! New session starts in:</div>}
      </div>
      <div className="timer">
        {timerMinutes}:{timerSeconds}
      </div>
      <div className="controls">
        <button className="btn start-stop" onClick={handleStartStop}>
          {isRunning ? "Pause" : "Start"}
        </button>
        <button className="btn reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}
