import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import AppContainer from './containers/AppContainer';
import ChatContainer from './containers/ChatContainer';
import LoginContainer from './containers/LoginContainer';

const Routes = (props) =>
  <Router {...props}>
    <Route path="/" component={AppContainer}>
       <IndexRoute component={LoginContainer} />
       <Route path="/chat" component={ChatContainer} />
    </Route>
  </Router>;

export default Routes;