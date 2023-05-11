import { useState } from "react";

export function CounterButton() {
  const [counter, setCounter] = useState(0);

  function handleButtonClick() {
    setCounter(counter + 1);
  }

  return <button onClick={handleButtonClick}>
    {counter}
  </button>
}