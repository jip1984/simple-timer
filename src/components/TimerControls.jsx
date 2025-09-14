import { useEffect, useRef } from "react";

const TimerControls = ({ toggleTimer, resetTime, isRunning }) => {
  const startButtonRef = useRef(null);
  useEffect(() => {
    if(startButtonRef.current) {
        startButtonRef.current.focus();
    }

  }, [])

  return (
    <div>
      <button
        ref={startButtonRef}
        onClick={toggleTimer}
        className="mt-3 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-300 mr-3"
      >
        {isRunning ? "Pause" : "Start"}
      </button>
      <button
        onClick={resetTime}
        className="mt-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-300"
      >
        Reset
      </button>
    </div>
  );
};

export default TimerControls;
