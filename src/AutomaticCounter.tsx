import { useEffect, useState } from "react";

export const AutomaticCounter = () => {
  const [count, setCount] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);

  useEffect(() => {
    const intervalRef = setInterval(() => setCount(currentCount => currentCount + incrementBy), 1000);

    return () => clearInterval(intervalRef);
  }, [incrementBy]);

  return <>
    {count}
    Increment by: <input type="number" value={incrementBy} onChange={(e) => setIncrementBy(Number(e.target.value))} />
  </>
}