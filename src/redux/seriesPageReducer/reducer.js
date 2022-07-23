// Todo
import  * as types from "./action.types"
const initialState = {
    matches : [],
    isLoading : true,
    isError : false,
}

const seriesUpcomingReducer = (state = initialState, action)=>{
       const {type, payload} = action;
   switch(type){
         case types.GET_SERIES_REQUEST :
          return {...state, isLoading : true, isError : false };
          case types.GET_SERIES_SUCCESS :
           return  { ...state,matches:payload, isLoading : false, isError: false };
           case types.GET_SERIES_FAILURE :
               return { ...state, isLoading : false, isError : true, };
      default :
       return state;  
   } 
}

export default  seriesUpcomingReducer;