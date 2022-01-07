import React, { useState } from "react";

export const ToggleClr = () => {
  const [clr, setClr] = useState("yellow");
  return (
    <div style={{ background: clr }}>
      <button onClick={() => setClr(clr === "red" ? "yellow" : "red")}>
        {clr === "red" ? "On" : "Off"}
      </button>
    </div>
  );
};
