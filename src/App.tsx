import * as React from 'react';

import './global.scss';
import { Router } from 'Router';
import { Provider } from 'Provider';
import { ErrorBoundary } from 'ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <Provider>
        <Router />
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
