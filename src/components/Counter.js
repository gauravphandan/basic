import React from "react";
import { useState } from "react";

const Counter = () => {
  const [counter, setcounter] = useState(0);
  const incrementcounter = () => {
    setcounter(counter + 1);
  };

  return (
    <div style={{ textAlign: "center", margintop: "20px" }}>
      <h1>Counter:{counter}</h1>
      <button
        style={{ margin: "0 5px" }}
        onClick={() => {
          incrementcounter();
        }}
      >
        {" "}
        Increment
      </button>
      <button
        style={{ margin: "0 5px" }}
        onClick={() => {
          setcounter(counter - 1);
        }}
      >
        Decrement
      </button>
      <button
        style={{ margin: "0 5px" }}
        onClick={() => {
          setcounter(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
