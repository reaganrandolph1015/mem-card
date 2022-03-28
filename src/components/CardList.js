import React from 'react';
import '../styles/Style.css';
import Card from './Card';

const CardList = (props) => {
  const players = props.players.map((name) => {
    return <Card key={name} validateSeletion={props.validateSeletion} />;
  });

  return <div className="card-list">{players}</div>;
};

export default CardList;
