import React, { Component } from 'react';
import {connect} from "react-redux";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Redux</h1>
        <button onClick={this.props.Increment}>Increment {this.props.number}</button>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return{
    number:state.number
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    Increment:()=>dispatch({type:"INCREAMENT"}),
    dIC
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)