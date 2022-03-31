import React from 'react';
import '../styles/Style.css';

const Overlay = (props) => {
  return (
    <div className={`game-overlay ${props.OverlayActive ? '' : 'hidden'}`}>
      <h1>Game Over!</h1>
      <h1>HIGHSCORE: {props.highscore}</h1>
      <button onClick={props.restartGame}>Try Again</button>
    </div>
  );
};

export default Overlay;
