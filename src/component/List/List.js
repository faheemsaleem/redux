import React from 'react';
import {connect} from "react-redux";

const List = ({task,dispatch}) => {

    return (
        <div>
            <ul>
                {
                    task.length > 0 && task.map((item,i)=>{
                        return (
                            <li key={i}>{item}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}


const mapStateToProps = ({task})=>{
    return{
        task
    }
}


export default connect(mapStateToProps)(List);