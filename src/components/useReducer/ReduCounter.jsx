import React, { useReducer } from "react"; //(1)
import "./ReducerCounter.css";

//(2)
const ReduCounter = () => {
  //(5)
  const initialState = 100;
  //(6)
  const reducer = (state, action) => {
    //(8)
    switch (action) {
      case "Increment":
        return state + 1;
      case "Decrement":
        return state - 1;
      case "Reset":
        return initialState;
      default:
        return state;
    }
  };
  //(4)
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countSecond, dispatchSecond] = useReducer(reducer, initialState);
  return (
    //(3)
    <div>
      <h1>Hello useReducer!</h1>
      <div className="check01" style={{ backgroundColor: "seagreen" }}>
        {/* (7) */}
        <h3>Current Count: {count}</h3>
        {/* (9) */}
        <button onClick={() => dispatch("Increment")}>Increment</button>
        <button onClick={() => dispatch("Reset")}>Reset</button>
        <button onClick={() => dispatch("Decrement")}>Decrement</button>
      </div>
      <br />
      <br />
      <div className="check02" style={{ backgroundColor: "coral" }}>
        {/* (7) */}
        <h3>Current Count: {countSecond}</h3>
        {/* (9) */}
        <button onClick={() => dispatchSecond("Increment")}>Increment</button>
        <button onClick={() => dispatchSecond("Reset")}>Reset</button>
        <button onClick={() => dispatchSecond("Decrement")}>Decrement</button>
      </div>
    </div>
  );
};

export default ReduCounter;
