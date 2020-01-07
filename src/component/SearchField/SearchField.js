import React from 'react';
import {connect} from "react-redux";

import {actionForGetInputValue,actionForUpdateTaskArray} from "../../action";
import "./SearchField.css"

const SearchField = (props) => {
    return (
        <>
            <div className="wrapper">
                <form>
                    <label>Enter your Task : </label>
                    <input className="input" type="text" name="todo" onChange={(e)=>props.actionForGetInputValue(e.target.value)} />
                    <button type="button" className="btn" onClick={()=>props.actionForUpdateTaskArray()}>Submit</button>
                </form>
            </div>
        </>
    );
};


export default connect(null,{actionForGetInputValue,actionForUpdateTaskArray})(SearchField);