import * as React from 'react';

import { FallbackUI } from './FallbackUI';

export function Suspense({ children: Component, ...rest }) {
  return (
    <React.Suspense fallback={FallbackUI}>
      <Component {...rest}  />
    </React.Suspense>
  );
}
