import React, { Component } from 'react'
class Textcolor extends Component {
    constructor(props){
        super(props);
        this.state={
            color:"#000000"
        }
    }
    greenHandler=()=>{
        this.setState({color:"#00FF00"});
    }
    redHandler=()=>{
        this.setState({color:"#FF0000"});
    }
    blueHandler=()=>{
        this.setState({color:"#0000FF"});
    }
  render() {
    return (
      <div>
        <h1 style={{color:this.state.color}}>Text color</h1>
        <button type='submit' onClick={this.redHandler}>RED</button>
        &nbsp;
        <button type='submit' onClick={this.greenHandler}>GREEN</button>
        &nbsp;
        <button type='submit' onClick={this.blueHandler}>Blue</button>
        &nbsp;
      </div>
    )
  }
}

export default Textcolor;
