import { useState, useEffect } from "react";

function App() {
  return <Counter></Counter>
}

function Counter() {
  const [count, setCount] = useState(0);
  
  useEffect(function () {
    setInterval(function () {
      setCount(count => count + 1);
    }, 1000)
  }, []);


  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    setCount(count - 1);
  }

  function resetCount() {
    setCount(0);
  }

  return <div>
    <h1 id="text">{count}</h1>
    <button onClick={increaseCount}>Increase Count</button>
    <button onClick={decreaseCount}>Decrease Count</button>
    <button onClick={resetCount}>Reset Count</button>
  </div>
}
export default App
