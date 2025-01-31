import React, { useState } from 'react';
import './App.css';

const App = () => {
const [input , setInput] = useState('');

const handleClick = (value) => {
  setInput(input + value);
};

const handleBackSpace = () =>{
  setInput(input.slice(0, -1));
}

const handleCalculate = () => {
  try{
    setInput(eval(input).toString());
  }
  catch{
    setInput('Error');
  }
};

const handleClear = () => {
  setInput('');
};

  return (
    <div className='App'>
    <h1>Calculator App</h1>

    <div className='inputContainer'>
      <input type='text' value={input} readOnly/>
    </div>
    
    <div className='buttonContainer'>
      <button onClick={ () => handleClick('1')}>1</button>
      <button onClick={ () => handleClick('2')}>2</button>
      <button onClick={ () => handleClick('3')}>3</button>
      <button onClick={ () => handleClick('+')} className='operatorButton'>+</button>
    </div>

    <div className='buttonContainer'>
      <button onClick={ () => handleClick('4')}>4</button>
      <button onClick={ () => handleClick('5')}>5</button>
      <button onClick={ () => handleClick('6')}>6</button>
      <button onClick={ () => handleClick('-')} className='operatorButton'>-</button>
    </div>

    <div className='buttonContainer'>
      <button onClick={ () => handleClick('7')}>7</button>
      <button onClick={ () => handleClick('8')}>8</button>
      <button onClick={ () => handleClick('9')}>9</button>
      <button onClick={ () => handleClick('*')} className='operatorButton'>*</button>
    </div>

    <div className='buttonContainer'>
      <button onClick={handleClear} className='operatorButton'>C</button>
      <button onClick={ () => handleClick('0')}>0</button>
      <button onClick={handleBackSpace} className='operatorButton'>!</button>
      <button onClick={ () => handleClick('/')} className='operatorButton'>/</button>
    </div>

    <div className='buttonContainer'>
      <button onClick={handleCalculate} className='operatorButton calculateButton'>=</button>
    </div>
    
    </div>
  );
}

export default App
