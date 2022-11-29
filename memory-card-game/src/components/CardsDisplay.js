import React, { useState, useEffect } from 'react';
import _ from 'underscore';
import Card from './Card';

function CardsDisplay(props) {
  const [cardsArr, setCardsArr] = useState([
    {id: 1, cardObj: <Card bgColor="black" />},
    {id: 2, cardObj: <Card bgColor="red" />},
    {id: 3, cardObj: <Card bgColor="blue" />},
    {id: 4, cardObj: <Card bgColor="orange" />},
    {id: 5, cardObj: <Card bgColor="purple" />},
    {id: 6, cardObj: <Card bgColor="grey" />},
    {id: 7, cardObj: <Card bgColor="yellow" />},
    {id: 8, cardObj: <Card bgColor="green" />},
    {id: 9, cardObj: <Card bgColor="indigo" />},
    {id: 10, cardObj: <Card bgColor="violet" />},
  ]);
  useEffect(() => {
    // Runs once on first mount, shuffles list so its random
    setCardsArr(_.shuffle(cardsArr));
  }, []);

  function handleClick(id, e) {
    // console.log(id);
    setCardsArr(_.shuffle(cardsArr));
    props.updateScoreboard(id);
  }

  return (
    <div className="cards-display">
      {cardsArr.map(obj => {return (
          <div key={obj.id} onClick={(e) => {handleClick(obj.id, e)}}>
            {obj.cardObj}
          </div>
        )})
      }
    </div>
  )
}

export default CardsDisplay;