import React from 'react';
import '../styles/Style.css';
import logo from '../imgs/logo2.png';

const Header = (props) => {
  return (
    <div className="header-container">
      <div className="header-container-logo">
        <img alt="NBA logo" src={logo} height="75px" />
      </div>
      <div className="header-container-scores" style={{ color: 'white' }}>
        <p className="scores">Score: {props.score}</p>
        <p className="scores">Highscore: {props.highscore}</p>
      </div>
    </div>
  );
};

export default Header;
