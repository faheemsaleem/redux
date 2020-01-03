import * as type from "../constants/index";
const initState ={
    number :0
}

const rootRuducer = (state = initState,action)=>{
    if(action.type ===type.INCREAMENT){
        return{
            ...state,
            number:state.number + 1
        }
    }
    return state;
}


export default rootRuducer;