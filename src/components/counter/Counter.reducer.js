import {
    INCREMENT,
    DECREMENT,
    ONRESET
  } from './Counter.action';


  export default (state = 0, action) => {
    switch (action.type) {
      case INCREMENT:
        return  state + 1

      case DECREMENT:
        return  state -1

      case ONRESET:
        return    state=0

      default:
        return state
    }
  }
  