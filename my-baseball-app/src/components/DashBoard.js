import React from "react";
import styled from "styled-components";

const DashBoard = props => {
    return (
        <div>
            <Btn data-testid="strikeoutbtn" onClick={props.updatedStrikes}>Strike</Btn>
            <Btn2 data-testid="ballbtn" onClick={props.updatedBalls}>Ball</Btn2>
            <Btn3 data-testid="foulballbtn" onClick={props.foulBall}>Foul Ball</Btn3>
            <Btn4 data-testid="hitbtn" onClick={props.hit}>Hit</Btn4>
        </div>
    )
}

const Btn = styled.button`
    font-size: 1rem;
    font-weight: bold;
    color: black;
    margin: 25px;
    padding: 10px;
    width: 4%;
    border-radius: 8px;
    border-color: black;
    background-color: red;
`;

const Btn2 = styled.button`
    font-size: 1rem;
    font-weight: bold;
    color: black;
    margin: 25px;
    padding: 10px;
    width: 4%;
    border-radius: 8px;
    border-color: black;
    background-color: green;
`;

const Btn3 = styled.button`
    font-size: 1rem;
    font-weight: bold;
    margin: 25px;
    padding: 10px;
    width: 6%;
    border-radius: 8px;
    border-color: black;
    background-color: yellow;
    color: black;
`;

const Btn4 = styled.button`
    font-size: 1rem;
    font-weight: bold;
    color: white;
    margin: 25px;
    padding: 10px;
    width: 4%;
    border-radius: 8px;
    border-color: black;
    background-color: limegreen;
    color: black;
`;

export default DashBoard;