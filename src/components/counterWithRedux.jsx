import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../app/features/counter/counterSlice";

function CounterWithRedux() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default CounterWithRedux;
