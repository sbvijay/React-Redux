import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const divStyle ={ width: "100px", height:"100px", backgroundColor:"red"}
export default class HomePage extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Sketch Brahma</h1>
        <div>{this.props.userDetails.name}</div>
        <div>{this.props.userDetails.mobileNumber}</div>
        <div style={divStyle} onClick={()=> this.props.actions.changeName("Vijay")}/>
        <div style={divStyle} onClick={()=> this.props.actions.changeMobile("9442217683")}/>
      </div>
    );
  }
}

