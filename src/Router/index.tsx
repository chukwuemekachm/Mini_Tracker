import * as React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Board from 'Board';
import Boards from 'Boards';
import { Layout } from 'Layout';

const routes = [
  {
    path: '/',
    component: Boards,
  },
  {
    path: '/:boardId',
    component: Board,
  },
];


export function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {
            routes.map(({ path, component }) =>
              <Route
                path={path}
                component={component}
                key={path}
                exact
              />
            )
          }
          <Redirect to="/" />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
} 
