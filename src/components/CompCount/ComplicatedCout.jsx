import React, { useReducer } from "react"; //(1)
import "./ComplicatedCount.css";

//(6)
const initialState = {
  first: 0,
  // (9)
  second: 100,
};
//(7)
const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { ...state, first: state.first + action.value };
    case "Decrement":
      return { ...state, first: state.first - action.value };
    //   (10)
    case "Increment2":
      return { ...state, second: state.second + action.value };
    case "Decrement2":
      return { ...state, second: state.second - action.value };
    case "Reset":
      return initialState;
    default:
      return state;
  }
};
//(2)
const ComplicatedCout = () => {
  //(5)
  const [count, dispatch] = useReducer(reducer, initialState);

  //(3)
  return (
    <div>
      <div className="check">
        {/* (4) */}
        <h1>Complicated useReducer</h1>
        <h3>Count: {count.first}</h3>
        <button onClick={() => dispatch({ type: "Increment", value: 2 })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "Decrement", value: 3 })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
      </div>
      {/* (8) */}
      <div className="check01">
        <h3>Second Count: {count.second}</h3>
        <button onClick={() => dispatch({ type: "Increment2", value: 5 })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "Decrement2", value: 5 })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
      </div>
    </div>
  );
};

export default ComplicatedCout;
