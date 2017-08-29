import React from 'react';
import {Router, Route} from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products'
import Login from './routes/Login'
import Register from './routes/Register'

function RouterConfig({history}) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage}/>
      <Route path="/products" component={Products}/>
      <Route path="/Login" component={Login}/>
      <Route path="/Register" component={Register}/>
    </Router>

  );
}

export default RouterConfig;
