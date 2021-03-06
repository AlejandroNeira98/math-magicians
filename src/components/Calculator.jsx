import React, { useState } from 'react';
import Key from './InputCalc';
import calculate from './logic/calculate';

const Calculator = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);
  const [display, setDisplay] = useState('0');

  const retrieveSymbol = (symbol) => {
    const calcObj = calculate({ total, next, operation }, symbol);
    setTotal(calcObj.total);
    setNext(calcObj.next);
    setOperation(calcObj.operation);

    if (!calcObj.next && !calcObj.total && !calcObj.operation) { setDisplay('0'); }
    if (calcObj.next && !calcObj.total && !calcObj.operation) { setDisplay(calcObj.next); }
    if (!calcObj.next && calcObj.total && calcObj.operation) { setDisplay('0'); }
    if (calcObj.next && calcObj.total && calcObj.operation) { setDisplay(calcObj.next); }
    if (!calcObj.next && calcObj.total && !calcObj.operation) { setDisplay(calcObj.total); }
  };

  return (
    <div id="calc">
      <div className="screen">{display}</div>
      <div className="row">
        <Key symbol="AC" retrieveSymbol={retrieveSymbol} />
        <Key symbol="+/-" retrieveSymbol={retrieveSymbol} />
        <Key symbol="%" retrieveSymbol={retrieveSymbol} />
        <Key symbol="÷" color="orange" retrieveSymbol={retrieveSymbol} />
      </div>
      <div className="row">
        <Key symbol="7" retrieveSymbol={retrieveSymbol} />
        <Key symbol="8" retrieveSymbol={retrieveSymbol} />
        <Key symbol="9" retrieveSymbol={retrieveSymbol} />
        <Key symbol="x" color="orange" retrieveSymbol={retrieveSymbol} />
      </div>
      <div className="row">
        <Key symbol="4" retrieveSymbol={retrieveSymbol} />
        <Key symbol="5" retrieveSymbol={retrieveSymbol} />
        <Key symbol="6" retrieveSymbol={retrieveSymbol} />
        <Key symbol="-" color="orange" retrieveSymbol={retrieveSymbol} />
      </div>
      <div className="row">
        <Key symbol="1" retrieveSymbol={retrieveSymbol} />
        <Key symbol="2" retrieveSymbol={retrieveSymbol} />
        <Key symbol="3" retrieveSymbol={retrieveSymbol} />
        <Key symbol="+" color="orange" retrieveSymbol={retrieveSymbol} />
      </div>
      <div className="row">
        <Key symbol="0" color="double" retrieveSymbol={retrieveSymbol} />
        <Key symbol="." retrieveSymbol={retrieveSymbol} />
        <Key symbol="=" color="orange" retrieveSymbol={retrieveSymbol} />
      </div>
    </div>
  );
};

export default Calculator;
