import React from 'react';
import { Router, Route, IndexRoute, Redirect } from 'react-router';
// import createHistory from 'history/lib/createHashHistory';

// const history = createHistory();

// 引入单个页面（包括嵌套的子页面）
import MainPage from './mainpage.js';
import Welcome from './welcome.js';
import NotFound from "./components/notfound";
// import Last from './last/last.js';
// import NotFoundPage from './nofind/nofind.js';
// import Login from './containers/login/login.js';


// 配置路由
export default  (
   <Router history={history} >
      <Route>
        <Route path="/" component={MainPage}>
          <Route path="welcome" component={Welcome}></Route>
        </Route>

        {/* <IndexRoute component={Login}/> */}
        {/* <Route path="/login" component={Login} /> */}
        {/* <Route path="/" component={Init}> */}
            {/* <IndexRoute component={MyDesktop}/> */}
            {/* <Route path="accountlist" component={AccountList} /> */}

            {/* 404 */}
            <Route path='/404' component={NotFound} />
            {/* 其他重定向到 404 */}
            <Redirect from='*' to='/404' />

      </Route>
    </Router>
);
