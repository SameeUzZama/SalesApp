import React from "react";
import { useState, useEffect } from "react";

const Watch = () => {
  const [sec, setSec] = useState(0);
  useEffect(() => {
    let mySec = sec + 1;
    if (mySec === 60) {
      mySec = 0;
    }
    setTimeout(() => setSec(mySec), 1000);
  }, [sec]);
  const [min, setMin] = useState(0);
  useEffect(() => {
    let myMin = min + 1;
    if (myMin === 60) {
      myMin = 0;
    }
    setTimeout(() => setMin(myMin), 1000);
  }, [min]);
  return (
    <div>
      <h1>Min</h1>
      <h1>{min}</h1>
      <h1>Sec</h1>
      <h1>{sec}</h1>
    </div>
  );
};

export default Watch;
