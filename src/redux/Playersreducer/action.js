// Todo
import * as types from "./action.types";
 import axios  from "axios";

const getPlayers = ()=> (dispatch)=>{
      dispatch({type : types.GET_PLAYERS_REQUEST})
     return  axios.get("http://localhost:8080/players")
      .then((e)=>{dispatch({type: types.GET_PLAYERS_SUCCESS, payload : e.data}); console.log(e)})
      .catch((err)=>dispatch({type : types.GET_PLAYERS_FAILURE, payload : err})); 
} 

export default getPlayers ;