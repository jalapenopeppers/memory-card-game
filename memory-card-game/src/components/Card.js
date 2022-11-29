import React, { useState, useEffect } from 'react';

function Card(props) {

  return (
    <div 
      className="card"
      style={{
        backgroundColor: props.bgColor,
      }}
    >
      <p>im a card</p>
    </div>
  )
}

export default Card;