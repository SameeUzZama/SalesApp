import React, { useState, useEffect, useRef } from "react";

const FunctionalTimer = () => {
  const intervalRef = useRef();
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevState) => prevState + 1);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);
  return (
    <div>
      <h1>Functional Timer: {timer}</h1>
      <button onClick={() => clearInterval(intervalRef.current)}>
        Clear Timer
      </button>
    </div>
  );
};

export default FunctionalTimer;
