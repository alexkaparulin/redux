import React from 'react';
import ReactDOM from 'react-dom';

import reduxLogger from "redux-logger"
import ReduxThunk from 'redux-thunk'
import { Provider } from "react-redux";
import { createStore,applyMiddleware  } from 'redux'


import App from './App'
import rootReducer from '../src/components/reducers/reducer'





const middleware = applyMiddleware(reduxLogger,ReduxThunk)
 const store = createStore(rootReducer, middleware)



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('#root'));