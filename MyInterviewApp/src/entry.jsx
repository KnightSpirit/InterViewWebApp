import React from 'react';
import { Provider, connect } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import { render } from 'react-dom';
import questionsReducer from './reducer/reducer.js';
import thunk from 'redux-thunk';
import App from './app.jsx';

let store = createStore(questionsReducer, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <App />
  </Provider> ,
  document.getElementById('root')
)