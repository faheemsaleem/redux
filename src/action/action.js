import * as type from "./../types";

export const Increament = ()=>{
    return {
        type:type.INCREMENT
    }
}

export const Dicrement = ()=>{
    return {
        type:type.DICREMENT
    }
}

export const onChangeAction = (target)=>{
    return {
        type:type.INPUT_VALUE,
        payload:{target:target.value}
    }
}