import React from 'react';
import ReactDOM from 'react-dom';

import { History } from 'history';

import App from './App';

// render micro frontend function
(window as any).renderFoo = (containerId: string, history: History) => {
  ReactDOM.render(
    <React.StrictMode>
      <App history={history} />
    </React.StrictMode>,
    document.getElementById(containerId),
  );
};

// unmount micro frontend function
(window as any).unmountFoo = (containerId: string) => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId) as any);
};

// Mount to root if it is not a micro frontend
if (!document.getElementById('Foo-container')) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root'),
  );
}
