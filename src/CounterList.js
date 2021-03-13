import React, { Component } from "react";
import Counter from "./Counter";

class CounterList extends Component {
    render() {
      console.log(this.props.counters);
      //you can use regular javascript right next to HTML thanks to JSX
      let list = [];
      for (let index = 0; index < this.props.counters; index++) {
        list.push(<Counter />);
      }
      // list will now have 3 `SomeComponent` components in side of it
  
      // now we can just render the list array and it will show the 3 Items components
      return <div className="list">{list}</div>;
    }
  }

  export default CounterList;