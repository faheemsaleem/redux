import * as type from "../types";
import axios from "axios";


export const actionForGetInputValue = (value)=>{
    console.log(value)
    return {
        type:type.GET_INPUT_VALUE,
        payload:{
            value
        }
    }
}

export const FetchDataFromJsonApi = ()=>{
    return async (disptch)=> {
        const data =await axios.get("https://jsonplaceholder.typicode.com/posts");
        const respon =await data.data
        disptch({type:"DATA",payload:respon})
    }
}
 

export const actionForUpdateTaskArray = ()=>{
    console.log("Hello WORLD")
    return{
           type:type.UPDATE_ARRAY,
       } 
    
}
