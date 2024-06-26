import React, { useState } from 'react';
import './App.css'; // Make sure to import the CSS file

function Counter() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const handleIncrement = () => setCount(count + 1);                  //Increment Func
  const handleDecrement = () => setCount(count - 1);                  //Decrement Func
  const handleReset = () => setCount(0);                              // Reset Func
  const handleInputChange = (e) => setInputValue(e.target.value);     // Handle input change
  const handleSetCount = () => setCount(parseInt(inputValue) || 0);   // Set custom value

  return (

    <div className="counter-container">
      <h1>Counter</h1>
      <div className="display">{count}</div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button className="reset-button" onClick={handleReset}>Reset</button>
      <div>
        <input 
          type="number" 
          value={inputValue} 
          onChange={handleInputChange}
          placeholder="Set value"
        />
        <button onClick={handleSetCount}>Set</button>
      </div>
    </div>
  );
}

export default Counter;
