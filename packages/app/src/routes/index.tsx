import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import { History } from 'history';

import MicroFrontend from '../components/MicroFrontend';
import hostsConfig from '../config/hosts';

interface AppProps {
  history: History;
}

const Main = lazy(() => import('../pages/Main'));

const Foo: React.FC<AppProps> = ({ history }) => (
  <MicroFrontend history={history} host={hostsConfig.foo} name="Foo" />
);

const Bar: React.FC<AppProps> = ({ history }) => (
  <MicroFrontend history={history} host={hostsConfig.bar} name="Bar" />
);

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/module-foo" component={Foo} />
    <Route path="/module-bar" component={Bar} />
    <Route path="/" component={() => <h1>404</h1>} />
  </Switch>
);

export default Routes;
