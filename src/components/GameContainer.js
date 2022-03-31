import React, { useState, useEffect } from 'react';
import Cards from './Cards';
import PlayerName from './PlayerName';
import '../styles/Style.css';
import { act } from 'react-dom/test-utils';

const GameContainer = (props) => {
  const [lvl, setLvl] = useState(1);
  const [cards, setCards] = useState(3);
  const [cardsPicked, setCardsPicked] = useState();
  const [playerArray, setPlayerArray] = useState([]);
  const [activePlayer, setActivePlayer] = useState([]);

  useEffect(() => {
    if (props.restartedGame === true) {
      setLvl(1);
      setCards(3);
      setCardsPicked();
      setPlayerArray([]);
      setActivePlayer([]);
      props.toggleRestartedGame(false);
      newCards();
    }
  }, [props.restartedGame]);

  const requiredCards = (lvl) => {
    switch (lvl) {
      case 1:
        setCards(3);
        break;
      case 2:
        setCards(6);
        break;
      case 3:
        setCards(9);
        break;
      case 4:
        setCards(12);
        break;
      case 5:
        setCards(15);
        break;
      default:
        setCards(15);
    }
  };

  const createPlayerArray = (cards) => {
    const createdPlayerArray = [];

    for (let i = 0; i < cards; i++) {
      let newVal = Math.floor(Math.random() * (150 - 0) + 0);
      while (createdPlayerArray.includes(newVal)) {
        newVal = Math.floor(Math.random() * (150 - 0) + 0);
      }
      createdPlayerArray.push(newVal);
    }

    setPlayerArray(createdPlayerArray);
  };

  console.log(playerArray);

  //TODO: FIX FUNCTION
  const makeActivePlayer = (playerArray, PlayerName) => {
    const playerNames = [];

    for (let i = 0; i < playerArray.length; i++) {
      playerNames.push(PlayerName[playerArray[i]]);
    }

    setActivePlayer(playerNames);
  };

  console.log(activePlayer);

  useEffect(() => {
    requiredCards(lvl);
  }, [lvl]);

  useEffect(() => {
    createPlayerArray(cards);
  }, [cards]);

  useEffect(() => {
    if (playerArray.length > 0) {
      makeActivePlayer(playerArray, PlayerName);
    }
  }, [playerArray]);

  const shuffle = (activePlayer) => {
    var currIndex = activePlayer.length,
      temporaryVal,
      randomIndex;

    // While elements left to shuffle..
    while (0 !== currIndex) {
      // Pick remaining element
      randomIndex = Math.floor(Math.random() * currIndex);
      currIndex -= 1;

      // Swap with current element
      temporaryVal = activePlayer[currIndex];
      activePlayer[currIndex] = activePlayer[randomIndex];
      activePlayer[randomIndex] = temporaryVal;
    }

    return activePlayer;
  };

  const validate = (card) => {
    if (!cardsPicked) {
      setCardsPicked([card]);
      shuffle(activePlayer);
      props.updateScore();
    } else {
      let cardExists = false;
      shuffle(activePlayer);
      for (let i = 0; i < cardsPicked.length; i++) {
        if (card === cardsPicked[i]) {
          cardExists = true;
        }
      }
      if (cardExists === false) {
        setCardsPicked([...cardsPicked, card]);
      } else {
        if (props.score > props.highScore) {
          props.updateHighScore(props.score);
        }
        props.toggleOverlay();
        return;
      }
      props.updateScore();
      if (cardsPicked.length === cards - 1) {
        setCardsPicked();
        setLvl(lvl + 1);
        newCards();
      }
    }

    console.log('validate() called');
  };

  const newCards = () => {
    setPlayerArray([]);
    createPlayerArray(cards);
    setActivePlayer([]);
    makeActivePlayer(playerArray, PlayerName);
  };

  //console.log(activePlayer);

  return (
    <div className="game-container">
      <Cards name={activePlayer} validate={validate} />
    </div>
  );
};

export default GameContainer;
