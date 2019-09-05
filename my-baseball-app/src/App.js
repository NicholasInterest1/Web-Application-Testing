import React, { useState }from "react";

import "./App.css";
import styled from "styled-components";

import Display from "./components/Display";
import DashBoard from "./components/DashBoard";

function App() {
  const [strike, setStrike] = useState(0);
  const [ball, setBall] = useState(0);
  // const [outs, setOuts] = useState(0);

  const updatedStrikes = () => {
    if (strike === 2) {
      setStrike(0);
      setBall(0);
    } else {
      setStrike(strike + 1);
    }
  }

  const updatedBalls = () => {
    if(ball === 3) {
      setStrike(0);
      setBall(0);
    } else {
      setBall(ball + 1);
    }
  }

  const hit = () => {
    setStrike(0);
    setBall(0);
  }

  const foulBall = () => {
    if (strike<= 1) {
      setStrike(strike + 1);
    } else {
      setStrike(strike);
    }
  }

  // const outs = () => {
  //   if (strike === 3) {
  //     setOuts(outs + 1);
  //   }
  // }
      

  return (
    <div className="App">
      <TheH1>New York Yankees vs. Boston Red Sox</TheH1>
      <Display 
      strike={strike} 
      ball={ball} 
      // outs={outs}
      />

      <DashBoard 
      updatedStrikes={updatedStrikes}
      updatedBalls={updatedBalls}
      foulBall={foulBall}
      hit={hit}
      />
    </div>
  );
}

const TheH1 = styled.h1`
  font-size: 3rem;
  color: white;
`;

export default App;
