import { useState } from "react";

export function CounterButton() {
  const [counter, setCounter] = useState<number>(0);

  function handleButtonClick() {
    setCounter(counter + 1);
  }

  function handleReset() {
    setCounter(0);
  }

  return <>
    <button onClick={handleButtonClick}>
      {counter}
    </button>
    <button onClick={handleReset}>
      reset
    </button>
  </>
}