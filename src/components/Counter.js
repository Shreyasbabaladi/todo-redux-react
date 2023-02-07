/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(todos){
     return todos.reduce((acc, curr) => !curr.isComplete? acc + 1 : acc, 0 ) 
  }

  render() {
    return (
    <div >
          <h2 className="text-2xl text-pink text-center px-2 py-3">{this.handleClick(this.props.todos)} Tasks remaining</h2>
    </div>);
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
  };
}

export default connect(mapStateToProps)(Counter);
