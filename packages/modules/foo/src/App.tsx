import React, { Suspense } from 'react';
import { Router } from 'react-router-dom';

import { History, createBrowserHistory } from 'history';

import Routes from './routes';

interface AppProps {
  history?: History;
}

const defaultHistory = createBrowserHistory();

const App: React.FC<AppProps> = ({ history }) => (
  <Router history={history || defaultHistory}>
    <Suspense fallback={<span>Loading...</span>}>
      <Routes />
    </Suspense>
  </Router>
);

export default App;
