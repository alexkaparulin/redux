import React, { Component} from 'react';

class Colordisplay extends Component {

  render() {
     const {chosenColor} =this.props
    return(
        <div>
            <h2>Your color is:{chosenColor}</h2>
            <hr/>
        </div>
    )
  }
}


export default Colordisplay
