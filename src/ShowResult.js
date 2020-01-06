import React from 'react';
import {connect} from "react-redux";
import {onChangeAction} from "./action/action";

const ShowResult = ({number,value,onChangeAction}) => {
    console.log(value)
    return (
        <div>
            <h1>{number} </h1>
            <input type="text" onChange={(e)=>onChangeAction(e.target)}/>
        </div>
    );
};

const mapStateToProps = ({number,value})=>{
    return {
        number,value
    }
}


export default connect(mapStateToProps,{onChangeAction})(ShowResult);