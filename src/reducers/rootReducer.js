import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// import exit from './exit/exitReducers.js';
// import login from './login/loginReducers.js';

const rootReducer = combineReducers({
  // exit,
  // login,
  routing: routerReducer
});

export default rootReducer;
