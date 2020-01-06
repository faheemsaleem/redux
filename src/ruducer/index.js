import * as type from "./../types";

const initState = {number :0,value:""}
export const ruducer = (state = initState,action)=>{
    switch (action.type) {
        case type.INCREMENT:
            return {
                ...state,
                number:state.number + 1
            }
        case type.DICREMENT:
            return{
                ...state,
                number:state.number - 1
            }
        case type.INPUT_VALUE:
            return{
                ...state,
                value:action.payload.value
            }
        default:return{ ...state}
    }
}


