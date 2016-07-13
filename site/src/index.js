let React = require('react');
let ReactDOM = require('react-dom');
let Provider = require('react-redux').Provider;
let createStore = require('redux').createStore;
let applyMiddleware = require('redux').applyMiddleware;
let App = require('./components/app');
let reducers = require('./reducers');

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
