import React from "react";

const DashBoard = props => {
    return (
        <div>
            <button data-testid="strikeoutbtn" onClick={props.updatedStrikes}>Strike</button>
            <button data-testid="ballbtn" onClick={props.updatedBalls}>Ball</button>
            <button onClick={props.foulBall}>FoulBall</button>
            <button onClick={props.hit}>Hit</button>
        </div>
    )
}

export default DashBoard;