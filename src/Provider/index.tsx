import * as React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import { client } from './client';

interface ProviderProps {
  children: any;
}

export function Provider({ children }: ProviderProps) {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
}

export * from './mutation';
export * from './queries';
export * from './reducers';
