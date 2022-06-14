import { useState  } from "react";
import "./App.css";

function App() {

  const [count, setCount]=useState(0)
 

  const handleClickDec=()=>
  {
    if(count===0)
    {
      return
    }
    setCount(count-1)
  }
  const handleClickInC=()=>
  {
    setCount(count+1)
  }

  return (
    <div className="App">
      <h2 data-testid="counter-value">{count}</h2>
      <button onClick={handleClickDec} data-testid="counter-decrement-button">-</button>
      <button onClick={handleClickInC} data-testid="counter-increment-button">+</button>
    </div>
  );
}

export default App;
