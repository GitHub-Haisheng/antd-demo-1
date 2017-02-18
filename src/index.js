import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routers.js';
import configureStore from './configureStore.js';
import { syncHistoryWithStore } from 'react-router-redux';
// import createHistory from 'history/lib/createHashHistory';
import './index.css';

// load favicon.ico
//require('./favicon.ico');
const store = configureStore();


const history = syncHistoryWithStore(browserHistory, store);
// const history = createHistory(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
