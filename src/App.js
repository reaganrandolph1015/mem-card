import React, { useState } from 'react';
import Header from './components/Header';
import GameContainer from './components/GameContainer';
import Overlay from './components/Overlay';
import PlayerName from './components/PlayerName';
import './styles/Style.css';

function App() {
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const [overlayActive, setOverlayActive] = useState(false);
  const [restartedGame, setRestartedGame] = useState(false);

  const updateScore = () => {
    setScore(score + 1);
  };

  const updateHighscore = () => {
    setHighscore(score);
  };

  const toggleOverlay = () => {
    setOverlayActive(!overlayActive);
    console.log('toggleOverlay() called');
  };

  const restartGame = () => {
    setScore(0);
    toggleOverlay();
    setRestartedGame(true);
  };

  const toggleRestartedGame = (val) => {
    setRestartedGame(val);
  };

  return (
    <div className="main-container">
      <Header score={score} highscore={highscore} />
      <GameContainer
        score={score}
        highscore={highscore}
        updateScore={updateScore}
        updateHighscore={updateHighscore}
        toggleOverlay={toggleOverlay}
        restartedGame={restartedGame}
        toggleRestartedGame={toggleRestartedGame}
      />
      <Overlay
        score={score}
        overlayActive={overlayActive}
        restartGame={restartGame}
      />
    </div>
  );
}

export default App;
