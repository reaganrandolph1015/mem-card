import React from 'react';
import logo from '../imgs/logo.png';

const Header = (props) => {
  return (
    <div className="header-container">
      <div className="header-container-logo">
        <img alt="NBA logo" src={logo} height="50px" />
      </div>
      <div className="header-container-scores">
        <p className="scores">Score: {props.score}</p>
        <p className="scores">Highscore: {props.highscore}</p>
      </div>
    </div>
  );
};

export default Header;
