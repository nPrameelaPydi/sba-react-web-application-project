// /components/Timer.js

import React, { useEffect } from "react";

const Timer = ({ timeLeft, setTimeLeft }) => {
  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        clearInterval(timer);
        // Handle when time runs out
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, setTimeLeft]);

  return (
    <div>
      <p className="timer">Time Left: {timeLeft} seconds</p>
    </div>
  );
};

export default Timer;
