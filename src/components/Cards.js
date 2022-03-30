import ImageName from './ImageName';
import '../styles/Style.css';
import LBJ from '../imgs/LBJ.png';
import SC from '../imgs/SC.png';
import KD from '../imgs/KD.png';
import uniqid from 'uniqid';

const Cards = (props) => {
  //TODO: DISPLAY IMAGES IN playerArray
  const playerArray = [
    {
      id: uniqid(),
      name: 'LeBron James',
      img: LBJ,
    },
    {
      id: uniqid(),
      name: 'Stephen Curry',
      img: SC,
    },
    {
      id: uniqid(),
      name: 'Kevin Durant',
      img: KD,
    },
  ];

  const playerMap = playerArray.map((player) => (
    <ImageName key={player.id} src={player.img} name={player.name} />
  ));

  const player = [
    {
      id: uniqid(),
      name: 'PLACEHOLDER1',
      card: playerMap,
    },
  ];

  console.log(playerMap);

  return <>{playerMap}</>;
};

export default Cards;
