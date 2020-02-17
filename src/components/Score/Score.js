import React from "react";
import "./score.css"

//Stateless functional component for score
const Score = props => {
  // const Score = ({total, status}) => (  //destructuring v1 in the parameter
  const { total, status } = props //destructuring v2 in the function's body. Extracting param from props
  return (
    <div className="gameScore">
      <h3 className="score">Your Score: {total}/12</h3>
      <h3 className="status">{status}</h3>
    </div>
  )
};

export default Score;