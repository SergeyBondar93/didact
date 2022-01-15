import { useState } from 'didact';
import { Counter } from './Counter';

export function App() {
  const [counter, setCounter] = useState(10);

  const handleClick = () => {
    setCounter((c) => c + 1);
  };

  return (
    <div>
      <h1>
        Counter
      </h1>
      <button onClick={handleClick}>
        Inc
      </button>
      <Counter count={counter} />
    </div>
  );
}
