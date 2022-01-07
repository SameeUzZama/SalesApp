import React, { useRef, useEffect } from "react";

const RefFocus = () => {
  const inputRef = useRef();
  const buttonref = useRef();
  //   console.log("check input--->", inputRef);
  const handleFocus = () => {
    inputRef.current.focus();
  };
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <h1>Hello Ref Focus!</h1>
      <input ref={inputRef} type="text" />
      <button ref={buttonref}>Sumbit</button>
      <button onClick={handleFocus}>Focus </button>
    </div>
  );
};

export default RefFocus;
