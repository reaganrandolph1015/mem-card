import React, { useState, useEffect } from 'react';
import axios from 'axios';
import uniqid from 'uniqid';

//TODO: TEST
const PlayerName = () => {
  const players = [
    {
      id: uniqid(),
      name: 'LeBron James',

      tier: 'easy',
    },
    {
      id: uniqid(),
      name: 'Stephen Curry',

      tier: 'easy',
    },
    {
      id: uniqid(),
      name: 'Kevin Durant',

      tier: 'easy',
    },
    // MEDIUM PLAYERS
    {
      id: uniqid(),
      name: 'Joel Embiid',

      tier: 'medium',
    },
    {
      id: uniqid(),
      name: 'Nikola Jokic',

      tier: 'medium',
    },
    {
      id: uniqid(),
      name: 'Luka Doncic',

      tier: 'medium',
    },
    // HARD PLAYERS
    {
      id: uniqid(),
      name: 'Devin Booker',

      tier: 'hard',
    },
    {
      id: uniqid(),
      name: 'Donovan Mitchell',

      tier: 'hard',
    },
    {
      id: uniqid(),
      name: 'Jayson Tatum',

      tier: 'hard',
    },
    // HARD+ PLAYERS
    {
      id: uniqid(),
      name: 'Jamal Murray',

      tier: 'hard+',
    },
    {
      id: uniqid(),
      name: 'Kris Middleton',

      tier: 'hard+',
    },
    {
      id: uniqid(),
      name: 'Kristaps Porzingis',

      tier: 'hard+',
    },
    // HARD++ PLAYERS
    {
      id: uniqid(),
      name: 'Austin Reaves',

      tier: 'hard++',
    },
    {
      id: uniqid(),
      name: 'Nicolas Claxton',

      tier: 'hard++',
    },
    {
      id: uniqid(),
      name: 'Kyle Anderson',

      tier: 'hard++',
    },
  ];

  const playerNameArray = players.map((player) => player.name);
  console.log(playerNameArray);

  //TODO: TEST
  const filtered = [{ name: '' }];
  for (let i = 0; i < players.length; i++) {
    filtered.push(players[i].name);
  }
  console.log(filtered);

  return playerNameArray;
};

export default PlayerName;
