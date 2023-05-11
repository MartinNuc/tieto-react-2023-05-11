import { useState } from "react";

type Props = {
  pregeneratedCount: number;
}

export const NumberGenerator = ({pregeneratedCount}: Props) => {
  const preGeneratedNumbers = [...Array(pregeneratedCount)].map(() => Math.random());
  const [generatedNumbers, setGeneratedNumbers] = useState(preGeneratedNumbers);

  function generateNew() {
    setGeneratedNumbers([...generatedNumbers, Math.random()]);
  }

  return <div>
    {generatedNumbers.map((num, index) => <div key={index}>{num}</div>)}
    <button type="button" onClick={() => generateNew()}>Generate new</button>
    <button type="button" onClick={() => generateNew()}>Reset</button>
  </div>
}