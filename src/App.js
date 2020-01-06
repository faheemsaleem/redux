import React, { Component } from 'react';
import {connect} from "react-redux";
import {Increament,Dicrement} from "./action/action";
import ShowResult from './ShowResult';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Redux</h1>
        <ShowResult />
        <button onClick={this.props.Increament}>Increment</button>
        <button onClick={this.props.Dicrement}>Decrement</button>

      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return {
    number:state.number
  }
}

export default connect(mapStateToProps,{Increament,Dicrement})(App);