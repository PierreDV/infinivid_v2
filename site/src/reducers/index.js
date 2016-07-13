let combineReducers = require('redux').combineReducers;

const rootReducer = combineReducers({
  state: (state = {}) => state
});

module.exports = rootReducer
