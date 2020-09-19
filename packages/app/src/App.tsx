import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Routes from './routes';

import './styles/reset.scss';

const App: React.FC = () => (
  <BrowserRouter>
    <Suspense fallback={<span>Loading...</span>}>
      <Header />
      <Routes />
    </Suspense>
  </BrowserRouter>
);

export default App;
