import React, { useReducer } from "react";
import "./ComplicatedCount.css";

const initialState = {
  first: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { ...state, first: state.first + action.value };
    case "Decrement":
      return { ...state, first: state.first - action.value };
    case "Reset":
      return initialState;
    default:
      return state;
  }
};
const CompCount02 = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="check">
      <h1>this is CompCount Practice</h1>
      <h3>Practice Couter: {count.first}</h3>
      <button onClick={() => dispatch({ type: "Increment", value: 20 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "Decrement", value: 40 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
    </div>
  );
};
export default CompCount02;
