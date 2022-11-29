import React, { useState, useEffect } from 'react';

function Scoreboard(props) {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCardsArr, setClickedCardsArr] = useState([]);
  /* 
    Probably not the most effective use of useEffect, but I wanted to 
    test out an implementation with it.
  */
  useEffect(() => {
    const clickedID = props.lastCardClicked;
    // console.log(`From Scoreboard, lastCardClicked = ${clickedID}`);
    // console.log(clickedCardsArr, clickedID);
    if (clickedID !== null) {
      if (clickedCardsArr.includes(clickedID)) {
        if (score > bestScore) {setBestScore(score);}
        setScore(0);
        setClickedCardsArr([]);
      } else {
        setClickedCardsArr(clickedCardsArr.concat(props.lastCardClicked));
        setScore(score + 1);
        // console.log(`Score: ${score}`);
        if (score + 1 >= bestScore) {setBestScore(score + 1);}
        // console.log(clickedCardsArr);
      }
    }
  }, [props.lastCardClicked]);

  return (
    <div className="scoreboard">
      <p>Score: {score}</p>
      <p>Best score: {bestScore}</p>
    </div>
  )
}

export default Scoreboard;