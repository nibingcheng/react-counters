import React, { Component } from "react";

class Counter extends Component { constructor() { super();  
         this.state = {
            count: 0
        }
    }
//Functions
    increaseCount = () => {
        this.setState({ count: this.state.count + 1 });
    }

    decreaseCount = () => {
        this.setState({ count: this.state.count - 1 });
    }
//Render
    render() {
        return (
            <div className="Counter">
                <h4>Counter: {this.state.count}</h4>
                <button onClick={this.increaseCount}>+</button>
                <button onClick={this.decreaseCount}>-</button>
            </div>
        )
    }

}

export default Counter;