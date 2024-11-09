import { useReducer, useState } from "react";
import { counterReducer, intialValue } from "../reducers/counterReducer";

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, intialValue);
  const [inputValue, setInputValue] = useState(0);
  return (
    <div>
      <h1>current count is {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>increase</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrease</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      <h2>enter a value to increment by it</h2>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() =>
          dispatch({ type: "incrementByAmount", payload: Number(inputValue) })
        }
      >
        increase by {inputValue}
      </button>

      <button
        onClick={() =>
          dispatch({ type: "decrementByAmount", payload: Number(inputValue) })
        }
      >
        decrease by {inputValue}
      </button>
    </div>
  );
}

export default Counter;
