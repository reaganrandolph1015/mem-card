import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import GameContainer from './components/GameContainer';
import PlayerName from './components/PlayerName';
import Cards from './components/Cards';

function App() {
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const [activePlayer, setActivePlayer] = useState([]);

  const updateScore = () => {
    setScore(score + 1);
  };

  const updateHighscore = () => {
    setHighscore(score);
  };

  return (
    <div className="main-container">
      <Header score={score} highscore={highscore} />
      <Cards />
      <PlayerName />
      <GameContainer
        score={score}
        highscore={highscore}
        updateScore={updateScore}
        updateHighscore={updateHighscore}
      />
    </div>
  );
}

export default App;
