import React from 'react';
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/index.js';
import createLogger from 'redux-logger';
import {render} from 'react-dom';
import App from './components/App';

const store = createStore(
  rootReducer,
  applyMiddleware(createLogger(), thunkMiddleware)
);

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app'));
