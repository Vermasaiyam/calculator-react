import { useState } from "react"
import './App.css'


function App() {
  const [input, setInput] = useState('');

  const calculate = (val) => {
    try {
      const operators = ['/', '*', '-', '+', '%'];
      let operator = null;

      for (let i = 0; i < val.length; i++) {
        if (operators.includes(val[i])) {
          operator = val[i];
          break;
        }
      }
      const [val1, val2] = val.split(operator).map(parseFloat);
      let result;

      switch (operator) {
        case '/': result = val1 / val2;
          break;
        case '*': result = val1 * val2;
          break;
        case '-': result = val1 - val2;
          break;
        case '+': result = val1 + val2;
          break;
        case '%': result = val1 % val2;
          break;
        default: throw new Error("Invalid Operator");
      }
      setInput(result.toString());
    }
    catch (error) {
      setInput('ERROR');
    }



  }

  const handleClick = (value) => {
    if (value === 'AC') {
      setInput('');
    }
    else if (value === 'DEL') {
      setInput(input.slice(0, -1));
    }
    else if (value === '=') {
      try{
        setInput(eval(input).toString());
      }
      catch(error){
        setInput('ERROR');
      }
      // calculate(input);
    }
    else {
      setInput((inp) => inp + value)
    }
  }

  return (
    <>
      <div className="calculator">
        <input type="text" id="input" value={input} />
        
        <div>
          <button className="operator" onClick={() => handleClick('AC')}>AC</button>
          <button className="operator" onClick={() => handleClick('DEL')}>DEL</button>
          <button className="operator" onClick={() => handleClick('%')}>%</button>
          <button className="operator" onClick={() => handleClick('/')}>/</button>
        </div>
        <div>
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button className="operator" onClick={() => handleClick('*')}>*</button>
        </div>
        <div>
          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button className="operator" onClick={() => handleClick('-')}>-</button>
        </div>
        <div>
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button className="operator" onClick={() => handleClick('+')}>+</button>
        </div>
        <div>
          <button onClick={() => handleClick('00')}>00</button>
          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={() => handleClick('.')}>.</button>
          <button id="equals" onClick={() => handleClick('=')}>=</button>
        </div>
      </div>

    </>
  )
}

export default App
