// Todo
 import  * as types from "./action.types"
 const initialstate = {
     players : [],
     isLoading : true,
     isError : false,
 }

const playersreducer = (state = initialstate, action)=>{
        const {type, payload} = action;
    switch(type){
          case types.GET_PLAYERS_REQUEST :
           return {...state, isLoading : true, isError : false };
           case types.GET_PLAYERS_SUCCESS :
            return  { ...state, isLoading : false, isError: false, players : payload };
            case types.GET_PLAYERS_FAILURE :
                return { ...state, isLoading : false, isError : true, };

                case types.GET_PLAYERS_REQUESTBYID :
           return {...state, isLoading : true, isError : false };
           case types.GET_PLAYERS_SUCCESSBYID :
            return  { ...state, isLoading : false, isError: false, players : payload };
            case types.GET_PLAYERS_FAILUREBYID :
                return { ...state, isLoading : false, isError : true, };
       default :
        return state;  
    } 
}

export default  playersreducer;