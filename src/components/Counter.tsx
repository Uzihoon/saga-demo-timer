import React from "react";
import useCounterActions from "../hooks/useCounterActions";
import useCounter from "../hooks/useCounter";

function Counter() {
  const counterActions = useCounterActions();
  const count = useCounter().count;
  return (
    <div>
      <h1>Counter</h1>
      <div>{count}</div>
      <button onClick={() => counterActions.onPlus({})}>PLUS</button>
      <button onClick={() => counterActions.onMinus()}>MINUS</button>
      <button onClick={() => counterActions.onPlusRandom()}>PLUS RANDOM</button>
      <button onClick={() => counterActions.onPlusAfterOneSeconds()}>
        PLUS AFTER ONE SECONDS
      </button>
    </div>
  );
}

export default Counter;
