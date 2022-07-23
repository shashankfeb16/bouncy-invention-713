// Todo
import * as types from "./action.types";
 import axios  from "axios";

  export const getPlayers = ()=> (dispatch)=>{
      dispatch({type : types.GET_PLAYERS_REQUEST})
     return  axios.get("http://localhost:8080/players")
      .then((e)=>{dispatch({type: types.GET_PLAYERS_SUCCESS, payload : e.data})})
      .catch((err)=>dispatch({type : types.GET_PLAYERS_FAILURE, payload : err})); 
} 
 export  const getPlayerById = (id)=> (dispatch)=>{
      dispatch({type : types.GET_PLAYERS_REQUEST})
     return  axios.get(`http://localhost:8080/players/${id}`)
      .then((e)=>{dispatch({type: types.GET_PLAYERS_SUCCESS, payload : e.data});})
      .catch((err)=>dispatch({type : types.GET_PLAYERS_FAILURE, payload : err})); 
} 

// export default {getPlayers, getPlayerById} ;