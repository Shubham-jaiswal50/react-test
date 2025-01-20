import { useState } from "react";

const Question2 = () => {
  const [square, setsquare] = useState(0);
  const [cube, setcube] = useState(0);

  const Square = (num) => {
    setsquare(num * num);
  };

  const Cube = (num) => {
    setcube(num * num * num);
  };

  return (
    <>
      <h1>The square is 5= {square}</h1>
      <h1>The cube is 5= {cube}</h1>
      <button onClick={() => Square(5)}>Square</button>
      <br />
      <br />
      <button onClick={() => Cube(5)}>Cube</button>
      <br />
      <br />
    </>
  );
};

export default Question2;
