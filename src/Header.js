import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <h1 className="App-title">React Counters</h1>
        <button onClick={this.props.increaseCounters}>+</button>
        <button onClick={this.props.decreaseCounters}>-</button>
      </header>
    );
  }
}

export default Header;
