import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import AppContainer from './containers/AppContainer';
import ChatContainer from './containers/ChatContainer';

const Routes = (props) =>
  <Router {...props}>
    <Route path="/" component={AppContainer}>
       <IndexRoute component={ChatContainer} />
    </Route>
  </Router>;

export default Routes;