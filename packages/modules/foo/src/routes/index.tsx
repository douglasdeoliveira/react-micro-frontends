import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const Main = lazy(() => import('../pages/Main'));

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Main} />
  </Switch>
);

export default Routes;
