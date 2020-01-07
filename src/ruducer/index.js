import * as type from "../types";

const initstate = {
    inputValue:"",
    task:[]
}
export const Ruducer = (state=initstate,action)=>{
    switch (action.type) {
        case type.GET_INPUT_VALUE:
            return{
                ...state,
                inputValue:action.payload.value
            }
        case type.UPDATE_ARRAY:
            return {
                ...state,
                task:[...state.task,state.inputValue]
            }
            default:return {
                ...state
            }
    }
}