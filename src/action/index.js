import * as type from "../types";

export const actionForGetInputValue = (value)=>{
    return {
        type:type.GET_INPUT_VALUE,
        payload:{
            value
        }
    }
}

export const actionForUpdateTaskArray = ()=>{
    return{
        type:type.UPDATE_ARRAY,
    }
}
