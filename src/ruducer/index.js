import * as type from "../types";

const initstate = {
    inputValue:"",
    task:[],
    data:[]
}
export const Ruducer = (state=initstate,action)=>{
    switch (action.type) {
        case type.GET_INPUT_VALUE:
            console.log(state.inputValue,"hello")

            return{
                ...state,
                inputValue:action.payload.value,
                
            }
        case type.UPDATE_ARRAY:
            console.log(state.inputValue,"hello")
            return {
                ...state,
                task:[...state.task,state.inputValue]
            }
        case "DATA":
            return {
                data:action.payload
            }
            default:return {
                ...state
            }
    }
}