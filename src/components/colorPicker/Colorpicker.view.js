import React, { Component} from 'react';
import {RED, BLUE, GREEN} from './Colorpicker.action'

class Colorpicker extends Component {

  render() {
      const {onchange} = this.props
   return (
   <div>
       <h1>Select your Favorite color</h1>
       <button onClick={()=>onchange(RED)}>Red</button>
       <button onClick={()=>onchange(GREEN)}>Green</button>
       <button onClick={()=>onchange(BLUE)}>Blue</button>
   </div>
    )
  }
}


export default Colorpicker


