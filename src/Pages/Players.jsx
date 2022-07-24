import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
 import getPlayers from '../redux/Playersreducer/action';
import     "./Players.css"
import { SearchIcon  } from '@chakra-ui/icons'
import {Link} from "react-router-dom"

   
const Players = () => {
       const dispatch = useDispatch();
       const {players} = useSelector((state)=>state.players);
         const [player, setPlayer] = useState([]);
         const [color , setColor] = useState("All");
        
    useEffect (()=>{
          if(players.length == 0 ){
            console.log("pppp");
            dispatch(getPlayers());
          }
         setPlayer(players);
    },[players.length]);

    const  handleClick = (text)=>{
          setColor(text);
      const X = players.filter((e)=>e.country == text);
        if(text === "All"){
          setPlayer(players);  
          console.log("ALL");
        }else{
          setPlayer(X);
          console.log("NotAll");
        }    
       }
    console.log("xxxxx",player);
         
  return (
       <div id='maindiv'>
           <div id='searchbox'>
           <SearchIcon id='icon'/>
             <input type="text" placeholder='Search Player'/>
           </div>
           <div id='filterbox'>
              <div style={{backgroundColor : `${color == "All" ? "red" : ""}` }}    onClick={()=>handleClick("All")}> ALL</div>
              <div style={{backgroundColor : `${color == "INDIA" ? "red" : ""}` }}  onClick={()=>handleClick("INDIA")}> IND</div>
              <div style={{backgroundColor : `${color == "NEW ZEALAND" ? "red" : ""}` }}  onClick={()=>handleClick("NEW ZEALAND")}> NZ</div>
              <div style={{backgroundColor : `${color == "AUSTRALIA" ? "red" : ""}` }} onClick={()=>handleClick("AUSTRALIA")}> AUS</div>
              <div style={{backgroundColor : `${color == "ENGLAND" ? "red" : ""}` }} onClick={()=>handleClick("ENGLAND")}> ENG</div>
            </div>
        <div id='innerdiv'>
            <div id='flexdiv'>
              {
                player.length >= 0 &&  player.map((e)=>
                <div key={e.id}> 
                <Link to ={`/players/${e.id}`}>
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

