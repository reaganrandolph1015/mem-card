import React from 'react';
import '../styles/Style.css';

const Card = (props) => {
  const image = () => (
    <div>
      <img alt={props.alt} className="player-img" src={props.src} />
    </div>
  );

  const name = () => (
    <div>
      <p className="player-name">{props.name}</p>
    </div>
  );

  return (
    <div className="card" onClick={() => props.validateSelection()}>
      {image} {name}
    </div>
  );
};

export default Card;
