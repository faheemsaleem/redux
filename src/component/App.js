import React, { Component } from 'react';
import {connect} from "react-redux";

import {FetchDataFromJsonApi} from "../action/index";
class App extends Component {

  state = {
    currentPage:1,
    itemPerPage:4
  }

  componentDidMount(){
    this.props.FetchDataFromJsonApi();
  }

  render() {
    const totalPage = this.state.currentPage * this.state.itemPerPage;
    const lastPage =totalPage - this.state.itemPerPage;
    const newArr = this.props.data.slice(lastPage,totalPage);


    const numberofPages = [];
    for(var i =1; i <= Math.ceil(this.props.data.length / this.state.itemPerPage);i++){
      numberofPages.push(i)
    }

    return (
      <div>
        {
          newArr.map((user)=>{
            return (
              <div key={user.id} style={{
                width:270,
                backgroundColor:"lightgrey",
                height:'350px',
                display:"inline-block",
                margin:"10px 10px",
                padding:60,
                boxSizing:"border-box",
                textAlign:"center"
              }}>
                <img src={`https://robohash.org/${user.id}?size=150x150`} />
                <h2>{user.username}</h2>
                <h4>{user.email}</h4>
              </div>
            )
          })
        }
        {
          <ul>
            {
              numberofPages.map((page,i)=>{
              return <li key={i} id={page} 
              style={{
                listStyle:"none",
                display:"inline-block",
              padding:10,
              boxShadow:"0px 0px 5px grey",
              cursor:"pointer",
              margin:"0 auto"
            }} 
            onClick={(e)=>this.setState({currentPage:e.target.id})}

            >{page}</li>
              })
            }
          </ul>
        }
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return{
    data:state.data
  }
}
export default connect(mapStateToProps,{FetchDataFromJsonApi})(App);