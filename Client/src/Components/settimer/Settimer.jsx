import React, { useState, useEffect } from "react";
import './Settimer.css';

export default function Settimer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            if (hours === 0) {
              clearInterval(interval); // Stop timer when time is up
              setIsRunning(false);
            } else {
              setSeconds(59);
              setMinutes(59);
              setHours((prev) => prev - 1);
            }
          } else {
            setSeconds(59);
            setMinutes((prev) => prev - 1);
          }
        } else {
          setSeconds((prev) => prev - 1);
        }
      }, 1000);
    }
    return () => clearInterval(interval); // Clean up interval on unmount
  }, [seconds, minutes, hours, isRunning]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setIsRunning(false);
  };

  const formatTime = (value) => (value < 10 ? `0${value}` : value);

  return (
    <div className="set-timer">
      <div className="timer">
        {`${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`}
      </div>
      <div className="time-controls">
        <label htmlFor="hours-input">Hours:</label>
        <input
          id="hours-input"
          type="number"
          value={hours}
          min="0"
          max="23"
          onChange={(e) => setHours(Math.max(0, Math.min(23, parseInt(e.target.value) || 0)))}
        />
        <label htmlFor="minutes-input">Minutes:</label>
        <input
          id="minutes-input"
          type="number"
          value={minutes}
          min="0"
          max="59"
          onChange={(e) => setMinutes(Math.max(0, Math.min(59, parseInt(e.target.value) || 0)))}
        />
        <label htmlFor="seconds-input">Seconds:</label>
        <input
          id="seconds-input"
          type="number"
          value={seconds}
          min="0"
          max="59"
          onChange={(e) => setSeconds(Math.max(0, Math.min(59, parseInt(e.target.value) || 0)))}
        />
      </div>
      <button onClick={handleStartStop}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
