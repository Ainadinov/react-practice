import { useState } from 'react';
import './index.css';

function Counter(){
    const [count, setCount] = useState(0)
   
    const countMinus = () =>{
        setCount(count - 1)
    }
    const countPlus = () =>{
        setCount(count + 1)
    }

  return (
    <div className="counter">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button onClick={countMinus} className="minus">- Минус</button>
        <button onClick={countPlus} className="plus">Плюс +</button>
      </div>
    </div>
  );
}

export default Counter;
