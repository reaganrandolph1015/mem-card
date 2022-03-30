import React, { useState, useEffect } from 'react';
import axios from 'axios';

//TODO: TEST
const PlayerName = () => {
  const [player, setPlayer] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://www.balldontlie.io/api/v1/players';
      let result = null;
      try {
        result = await axios(url, {
          headers: {
            Accept: 'application/json',
          },
        });
      } catch (e) {
        console.log(e);
      }
      // show API data
      setPlayer(result.data.data);
    };

    fetchData();
  }, []);

  // console.log(player);

  let playerNameMap = player.map((player, key) => {
    return (
      <li key={key}>
        {player.first_name} {player.last_name}
      </li>
    );
  });

  return <ul>{playerNameMap}</ul>;
};

export default PlayerName;
