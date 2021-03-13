import React, { Component } from "react";
import Header from "./Header";
import CounterList from "./CounterList";

class App extends Component {
  constructor() {
    super()

    this.state = {
      counters: 6
    }
  }

  increaseCounters =()=> {
    // let counters = this.state.counters + 1;

    this.setState({
      counters: this.state.counters + 1
    });
    console.log(this.state.counters);
  }

  decreaseCounters =()=> {
    // let counters = this.state.counters - 1;

    this.setState({
      counters: this.state.counters - 1
    });
    console.log(this.state.counters);
  }

  render() {    
    return (
      <div className="App">
        <Header 
          increaseCounters={this.increaseCounters}
          decreaseCounters={this.decreaseCounters}
        />
        {/* <h4>{this.props.data.counters}</h4> */}
        <CounterList counters={this.state.counters}/>
      </div>
    );
  }
}

export default App