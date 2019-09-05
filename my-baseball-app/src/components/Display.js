import React from "react";
import styled from "styled-components";

const Display = props => {
  return (
    <TheDiv>
      <TheH2>Balls: {props.ball}</TheH2>
      <TheH3>Strikes: {props.strike}</TheH3>
      {/* <TheH4> Outs: {props.outs}</TheH4> */}
    </TheDiv>
  );
};

const TheH2 = styled.h2`
    margin-top: 70px    
    font-size: 1.5rem;
    color: green;
`;

const TheH3 = styled.h3`  
    font-size: 1.5rem;
    color: red;
`;

const TheDiv = styled.div`
    background-color: black;
    opacity: 0.7;
`;

// const TheH4 = styled.h4`  
//     font-size: 1.5rem;
//     color: white;
// `;

export default Display;
