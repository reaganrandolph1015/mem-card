import ImageName from './ImageName';
import LBJ from '../imgs/LBJ.png';
import SC from '../imgs/SC.png';
import KD from '../imgs/KD.png';
import JE from '../imgs/JE.png';
import NJ from '../imgs/NJ.png';
import LD from '../imgs/LD.png';
import DB from '../imgs/DB.png';
import DM from '../imgs/DM.png';
import JT from '../imgs/JT.png';
import JM from '../imgs/JM.png';
import KM from '../imgs/KM.png';
import KP from '../imgs/KP.png';
import AR from '../imgs/AR.png';
import NC from '../imgs/NC.png';
import KA from '../imgs/KA.png';
import uniqid from 'uniqid';
import '../styles/Style.css';

const Cards = (props) => {
  //TODO: FINISH ARRAY
  const players = [
    {
      id: uniqid(),
      name: 'LeBron James',
      img: LBJ,
      tier: 'easy',
    },
    {
      id: uniqid(),
      name: 'Stephen Curry',
      img: SC,
      tier: 'easy',
    },
    {
      id: uniqid(),
      name: 'Kevin Durant',
      img: KD,
      tier: 'easy',
    },
    // MEDIUM PLAYERS
    {
      id: uniqid(),
      name: 'Joel Embiid',
      img: JE,
      tier: 'medium',
    },
    {
      id: uniqid(),
      name: 'Nikola Jokic',
      img: NJ,
      tier: 'medium',
    },
    {
      id: uniqid(),
      name: 'Luka Doncic',
      img: LD,
      tier: 'medium',
    },
    // HARD PLAYERS
    {
      id: uniqid(),
      name: 'Devin Booker',
      img: DB,
      tier: 'hard',
    },
    {
      id: uniqid(),
      name: 'Donovan Mitchell',
      img: DM,
      tier: 'hard',
    },
    {
      id: uniqid(),
      name: 'Jayson Tatum',
      img: JT,
      tier: 'hard',
    },
    // HARD+ PLAYERS
    {
      id: uniqid(),
      name: 'Jamal Murray',
      img: JM,
      tier: 'hard+',
    },
    {
      id: uniqid(),
      name: 'Kris Middleton',
      img: KM,
      tier: 'hard+',
    },
    {
      id: uniqid(),
      name: 'Kristaps Porzingis',
      img: KP,
      tier: 'hard+',
    },
    // HARD++ PLAYERS
    {
      id: uniqid(),
      name: 'Austin Reaves',
      img: AR,
      tier: 'hard++',
    },
    {
      id: uniqid(),
      name: 'Nicolas Claxton',
      img: NC,
      tier: 'hard++',
    },
    {
      id: uniqid(),
      name: 'Kyle Anderson',
      img: KA,
      tier: 'hard++',
    },
  ];

  // map through obj array and insert elements into ImageName component
  const player = players.map((player) => (
    <ImageName
      key={player.id}
      src={player.img}
      name={player.name}
      validate={props.validate}
    />
  ));

  //TODO: TEST
  const player2 = props.name.map((named) => named);
  //console.log(player2);

  return <div className="card-list">{player}</div>;
};

export default Cards;
