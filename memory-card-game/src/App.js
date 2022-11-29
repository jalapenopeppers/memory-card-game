// import './App.css';
import Title from './components/Title';
import Scoreboard from './components/Scoreboard';
import CardsDisplay from './components/CardsDisplay';
import React, {useState, useEffect} from 'react';

function App() {
  const [lastCardClicked, setLastCardClicked] = useState(null);
  function updateScoreboard(id) {
    setLastCardClicked(id);
    // console.log(`From App, lastCardClicked = ${lastCardClicked}`);
  }

  return (
    <div className="App">
      <Title />
      <h3>Click a unique card each turn. Score increases for every unique card clicked.</h3>
      <h3>If you click a card you already picked, you lose!</h3>
      <Scoreboard lastCardClicked={lastCardClicked}/>
      <CardsDisplay updateScoreboard={updateScoreboard}/>
    </div>
  );
}

export default App;
