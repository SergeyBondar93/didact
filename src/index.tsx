import { render, useState } from 'didact';

function Counter({ count }) {
  return <h1>{ count }</h1>;
}

function App() {
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

render(<App />, document.getElementById('root'));
