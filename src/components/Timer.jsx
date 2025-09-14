import { useState, useRef, useEffect } from "react";
import TimerDisplay from "./TimerDisplay";
import TimerControls from "./TimerControls";

const Timer = () => {
  const timerRef = useRef(null);
  const [time, setTime] = useState(() => {
    return Number(localStorage.getItem("time") || 0);
  });
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    localStorage.setItem("time", time);
  }, [time]);

  const toggleTimer = () => {
    if (isRunning) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    } else {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    setIsRunning(!isRunning);
  };

  const resetTime = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setTime(0);
    timerRef.current = null;
    localStorage.removeItem('time')
  };
  return (
    <div>
      <TimerDisplay time={time} />
      <TimerControls
        resetTime={resetTime}
        toggleTimer={toggleTimer}
        isRunning={isRunning}
      />
    </div>
  );
};

export default Timer;
