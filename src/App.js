import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { random } from "mathjs";

function App() {
  const [mines, setMines] = useState();

  class cell {
    constructor(status) {
      this.activated = false;
      this.count = 0;
      this.isMine = status;
    }
  }
  // console.log(random(0, 2));
  const getMineCoords = (height, width, numMines) => {
    let mineCoords = [];
    for (let i = 0; i < numMines; i += 1) {
      do {
        // let mineH = random(0, height);
        // console.log("works", mineH);
      } while (true);
    }
  };

  const startGame = () => {
    console.log("click");
    getMineCoords(10, 10, 10);
  };

  return (
    <div className="App">
      {/* <MineBoard></MineBoard> */}
      <button onClick={startGame()}>Start</button>
    </div>
  );
}

export default App;

// const cell = styled.div``;
