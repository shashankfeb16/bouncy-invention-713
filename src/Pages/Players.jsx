import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getPlayers from '../redux/Playersreducer/action';
import     "./Players.css"
import { SearchIcon  } from '@chakra-ui/icons'


const Players = () => {
       const dispatch = useDispatch();
       const playersdata = useSelector((state)=>state.players);

    useEffect (()=>{
          if(playersdata.length == 0 ){
            console.log("pppp");
            dispatch(getPlayers());
          }
    },[playersdata.length]);
    console.log(playersdata);
         
  return (
       <div id='maindiv'>
           <div id='searchbox'>
           <SearchIcon id='icon'/>
             <input type="text" placeholder='Search Player'/>
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
              <div > 
                <img src="https://images.cricket.com/players/65756_headshot_safari.png" alt="" />
                <p>Rishav Pant</p>
              </div>
              <div>
              <img src="https://images.cricket.com/players/65756_headshot_safari.png" alt="" />
                <p>Rishav Pant</p>
              </div>
              <div> 
                 <img src="https://images.cricket.com/players/3850_headshot_safari.png" alt="" />  
                 <p>virat</p>    
              </div>
              <div> 
              <img src="https://images.cricket.com/players/3850_headshot_safari.png" alt="" />  
                 <p>virat</p>  
              </div>
              <div> 
              <img src="https://images.cricket.com/players/3850_headshot_safari.png" alt="" />  
                 <p>virat</p>  
              </div>
              <div>
                <img src="https://images.cricket.com/players/4196_headshot_safari.png" alt="" /> 
                <p>hh</p>
                </div>
              <div> </div>
              <div> </div>
              </div>   
        </div>    
       </div>
  )
}

export default Players


