import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getPlayers from '../redux/Playersreducer/action';
import "./Players.css"
import { SearchIcon } from '@chakra-ui/icons'
import { Link } from "react-router-dom"


const Players = () => {
  const dispatch = useDispatch();
  const { players } = useSelector((state) => state.players);

  useEffect(() => {
    if (players.length == 0) {
      dispatch(getPlayers());
    }
  }, [players.length]);
  console.log(players);

  return (
    <div id='maindiv'>
      <div id='searchbox'>
        <SearchIcon id='icon' />
        <input type="text" placeholder='Search Player' />
      </div>
      <div id='filterbox'>
        <div> ALL</div>
        <div> IND</div>
        <div> NZ</div>
        <div> AUS</div>
        <div> ENG</div>
      </div>
      <div id='innerdiv'>
        <div id='flexdiv'>
          {
            players.length >= 0 && players.map((e) =>
              <div key={e.id}>
                <Link to={`/players/${e.id}`}>
                  <img src={e.image} alt="" />
                  <p>{e.name}</p>
                </Link>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Players


