import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cube1, square1 } from "./myslice";

const Question2 = () => {
  const dispatch = useDispatch();

  
  const square = useSelector((state) => state.mytest.square);
  const cube = useSelector((state) => state.mytest.cube);

  
  const [inputValue, setInputValue] = useState(5);


  const calculate = () => {
    dispatch(square1(inputValue)); 
    dispatch(cube1(inputValue));   
  };

  return (
    <>
      <h1>The square of {inputValue} is: {square}</h1>
      <h1>The cube of {inputValue} is: {cube}</h1>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value))} 
      />
      <button onClick={calculate}>Calculate</button>
      <br />
      <br />
    </>
  );
};

export default Question2;
