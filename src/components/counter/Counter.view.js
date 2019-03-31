import React, { Component} from 'react';

class Counter extends Component {

  render() {
    const { value, onIncrement, onDecrement,onReset } = this.props
    return (
      <div>
        <div>
          <button onClick={onIncrement}> + </button>
          <button  onClick={onDecrement}> - </button>
          <button  onClick={onReset}> Reset </button>
        </div>
        <span>Current Count is: {value} </span>
        <hr/>
      </div>
    )
  }
}


export default Counter
