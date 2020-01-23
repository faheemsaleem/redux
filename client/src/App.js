import React, { Component } from "react";
import axios from "axios";


class App extends Component {
  state = {
    value: ""
  };

  onChangeHandler = e => {
    this.setState({
      value: e.target.value
    });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    axios.post("http://localhost:3001/test", this.state);
  };

  render() {
    console.log(this.state.value);
    const style = {
      div: {
        width: "80%",
        height: "150px",
        margin: "0 auto",
        backgroundColor: "lightgrey",
        position: "relative"
      },
      form: {
        position: "absolute",
        left: "50%",
        top: "50%",
        width: "80%",
        transform: "translate(-50%,-50%)"
      },
      input: {
        width: "70%",
        display: "inline-block",
        height: 35,
        borderRadius: "20px",
        outline: "none",
        border: "none",
        boxShadow: "0px 1px 3px grey",
        paddingLeft: 15
      },
      button: {
        width: "20%",
        display: "inline-block",
        height: 35,
        borderRadius: "20px",
        boxShadow: "0px 1px 3px grey",
        outline: "none",
        border: "none",
        marginLeft: "2%"
      }
    };

    return (
      <div style={style.div}>
        <form style={style.form} onSubmit={this.onSubmitHandler}>
          <input
            onChange={this.onChangeHandler}
            style={style.input}
            type="text"
            name="task"
            placeholder="Enter Something you Like..."
          />
          <button style={style.button} type="submit">
            <span></span>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default App;
