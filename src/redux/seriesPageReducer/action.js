// Todo
import * as types from "./action.types";
 import axios  from "axios";

const getSeriesUpcoming = ()=> (dispatch)=>{
      dispatch({type : types.GET_SERIES_REQUEST})
     return  axios.get("http://localhost:8080/seriesUpcoming")
      .then((e)=>{dispatch({type: types.GET_SERIES_SUCCESS, payload : e.data});})
      .catch((err)=>dispatch({type : types.GET_SERIES_FAILURE, payload : err})); 
} 
const getSeriesOngoing = ()=> (dispatch)=>{
    dispatch({type : types.GET_SERIES_REQUEST})
   return  axios.get("http://localhost:8080/seriesOngoing")
    .then((e)=>{dispatch({type: types.GET_SERIES_SUCCESS, payload : e.data});})
    .catch((err)=>dispatch({type : types.GET_SERIES_FAILURE, payload : err})); 
} 
const getSeriesCompleted = ()=> (dispatch)=>{
    dispatch({type : types.GET_SERIES_REQUEST})
   return  axios.get("http://localhost:8080/seriesCompleted")
    .then((e)=>{dispatch({type: types.GET_SERIES_SUCCESS, payload : e.data});})
    .catch((err)=>dispatch({type : types.GET_SERIES_FAILURE, payload : err})); 
} 

export {getSeriesUpcoming,getSeriesOngoing,getSeriesCompleted} ;