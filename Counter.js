import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
    incrementHandler=()=>{
        this.setState({count:this.state.count+1});
    }
    decrementHandler=()=>{
        this.setState({count:this.state.count-1});
    }

  render() {
    return (
      <div>
        <button type="button" onClick={this.incrementHandler}>Increment</button>
        &nbsp;
        {this.state.count}
        <button type="button" onClick={this.decrementHandler}>Decrement</button>
      </div>
    )
  }
}
