import { useEffect, useState } from "react";

export const AutomaticCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalRef = setInterval(() => setCount(currentCount => currentCount + 1), 1000);

    return () => clearInterval(intervalRef);
  }, []);

  return <>{count}</>
}