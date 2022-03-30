import React from 'react';
import '../styles/Style.css';

function ImageName(props) {
  return (
    <div className="card">
      <div className="player-image-container">
        <img className="player-image" src={props.src} alt={props.name} />
      </div>
      <div className="player-name-container">
        <p className="player-name">{props.name}</p>
      </div>
    </div>
  );
}

export default ImageName;
