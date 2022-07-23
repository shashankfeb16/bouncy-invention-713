
import React, { useEffect, useState } from 'react'
import "./singleplayer.css"
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {getPlayerById} from "../../redux/Playersreducer/action"
  
const Singleplayer = () => {  

  const dispatch = useDispatch();  
  const {id} = useParams();
  const {players} = useSelector((state)=>state.players);
  const [current, setCurrent] = useState([]); 
  const [color , setColor] = useState("BAT");
  const [data, setData] = useState([]);
  
  const handleClick = (text)=>{
    setColor(text)
        if(text == "BAT"){
           setData(current.batting);
        }
        if(text == "BOLL"){
           setData(current.bowlling);
        }
        console.log("bbb", data);

   }
    useEffect(()=>{
        if(players.length >=0){
           console.log(id);
            dispatch(getPlayerById(Number(id)));
        } 
        setCurrent(players);
         if(current.id > 0){
           setData(current.batting);
         }
    },[  id,dispatch, players.length,current,]); 
      
    
      
     console.log("cccc",current);
    
  return (
    <div id='maindiv' >
      {/* break */}
         {
            <div id='singlebox' key={current.id}>
            <div id="singlediv">
              <h1>{current.name}</h1>
              <h2>28 YEARS</h2>
              <div><img src={current.logo} alt="" /> <span><p>{current.country}</p></span></div>
              <h3>Batting Style</h3>
              <p>right handed</p>
              <h3>Bolling</h3>
              <p>right arms</p>
            </div>
            <div id='singlediv2'>
              <img src={current.image} alt="" />
            </div>
           </div>
         }
            
          {/* --------break------- */}
         <div id='carrerbox'>
          <p>Carrer Start</p>
          <p>Recent</p>
          <p>Fantacy</p>
          <p>Articals</p>
         </div>
         <hr/>
         <div id='status'>
           <div  style={{backgroundColor : `${color == "BAT" ? "red" : ""}`, color : `${color == "BAT" ? "white" : ""}`  }}    onClick={()=>handleClick("BAT")}>BATTING STATS</div>
           <div  style={{backgroundColor : `${color == "BOLL" ? "red" : ""}` , color : `${color == "BOLL" ? "white" : ""}` }}    onClick={()=>handleClick("BOLL")}>BOWLING STATS</div>
         </div>
         <hr/>
         <div >
         <table>
          <thead>
  <tr>
    <th>Formate</th>
    <th>Test</th>
    <th>ODI</th>
    <th>T20I</th>
    <th>FC</th>
    <th>listA</th>
    <th>T20s</th>
  </tr>
  </thead>
  <tbody>
     {
       data.length >=  0 && data.map((e,index)=>(
        <tr key={index} >
        <td>{e.FORMATE}</td>
        <td>{e.TEST} </td>
        <td>{e.ODI}</td>
        <td>{e.T20I}</td>
        <td>{e.FC}</td>
        <td>{e.lisrA}</td>
        <td>{e.T20s}</td>
      </tr>
       ))
     }

  </tbody>
</table>
  </div>
     <div id='padding'>

     </div>
         <div id='similar'>
           <div id='similardiv'>SIMILAR PLAYERS</div>
           <hr/>
           <div id='similarimg'>
            <div>
              <div>
              <img src="https://images.cricket.com/players/65756_headshot_safari.png" alt="" />
              <p>Rishav Pant</p>
              </div>
              
            </div>
            <div>
              <div>
            <img src="https://images.cricket.com/players/5380_headshot_safari.png" alt="" />
            <p>Devid Warner</p>
            </div>
            </div>
            <div>
            <div>
            <img src="https://images.cricket.com/players/3722_headshot_safari.png" alt="" />
            <p>Shikhar Dhawan</p>
            </div>
            </div>
            <div>
            <div>
            <img src="https://images.cricket.com/players/3850_headshot_safari.png" alt="" />
            <p>Ravindra Jadeja</p>
            </div>
            </div>
            <div>
            <div>
            <img src="https://images.cricket.com/players/10085_headshot_safari.png" alt="" />
            <p>Glenn Maxwell</p>
            </div>
            </div>
           </div>
         </div>
          {/* Details */}
         <div id='padding'>

          </div>
      <div id='similar'>
        <div id='similardiv'>PLAYER BIO</div>
       <hr/>
      <div id='detailbox'>
      <h3>About</h3>
      <p>Suryakumar Yadav’s power hitting in the Indian T20 League for Mumbai has made him a name to reckon with for many. But what many may not know is tha</p>
        <h2>More</h2>
      </div>
      </div>
    </div>
  )
}

export default Singleplayer