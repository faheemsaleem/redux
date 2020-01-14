import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { SecessFullyDataRecive } from "../action/index";


class App extends Component {
  state = {
    itemPerPage: 12
  };

  componentDidMount() {
    this.props.SecessFullyDataRecive();
  }
  

  render() {
    const Check = this.props.location.state === undefined;
    const totalPage = Check
      ? 1 * this.state.itemPerPage
      : this.props.location.state.currentPage * this.state.itemPerPage;
    const lastPage = totalPage - this.state.itemPerPage;
    const newArr = this.props.data.slice(lastPage, totalPage);

    const numberofPages = [];
    for (
      var i = 1;
      i <= Math.ceil(this.props.data.length / this.state.itemPerPage);
      i++
    ) {
      numberofPages.push(i);
    }
    return (
      <div>
        <h1>Hello World</h1>
        {this.props.error.message ? (
          <h1 style={{ color: "red" }}>{this.props.error.message}</h1>
        ) : this.props.loading ? (
          "Loading..."
        ) : (
          newArr.map(user => {
            return (
              <div
                key={user.id}
                style={{
                  width: 270,
                  backgroundColor: "lightgrey",
                  height: "350px",
                  display: "inline-block",
                  margin: "10px 10px",
                  padding: 10,
                  boxSizing: "border-box",
                  textAlign: "center"
                }}
              >
                <img
                  alt="Rebots Are gone to future"
                  src={`https://robohash.org/${user.id}?size=150x150`}
                />
                <h4>{user.title}</h4>
                <p>{user.body.substr(0, 30)}...</p>
              </div>
            );
          })
        )}
        {
          <ul>
            {numberofPages.map((page, i) => {
              return (
                <li
                  key={i}
                  id={page}
                  style={{
                    listStyle: "none",
                    display: "inline-block",
                    padding: 10,
                    boxShadow: "0px 0px 5px grey",
                    cursor: "pointer",
                    margin: "0 auto",
                    backgroundColor: Check
                      ? ""
                      : page === this.props.location.state.currentPage
                      ? "red"
                      : ""
                  }}
                  onClick={e =>
                    this.props.history.push({
                      pathname: `/page/${page}`,
                      state: { currentPage: page }
                    })
                  }
                >
                  {page}
                </li>
              );
            })}
          </ul>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data,
    loading: state.loading,
    error: state.error
  };
};

export default connect(mapStateToProps, { SecessFullyDataRecive })(
  withRouter(App)
);
