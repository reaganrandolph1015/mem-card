import React, { useState } from 'react';
import Header from './components/Header';
import CardList from './components/CardList';

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
      <CardList players={activePlayer} />
    </div>
  );
}

export default App;
