import React from 'react';
import ReactDOM from 'react-dom';

import { History } from 'history';

import App from './App';

// render micro frontend function
(window as any).renderBar = (containerId: string, history: History) => {
  ReactDOM.render(
    <React.StrictMode>
      <App history={history} />
    </React.StrictMode>,
    document.getElementById(containerId),
  );
};

// unmount micro frontend function
(window as any).unmountBar = (containerId: string) => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId) as any);
};

// Mount to root if it is not a micro frontend
if (!document.getElementById('Bar-container')) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root'),
  );
}
