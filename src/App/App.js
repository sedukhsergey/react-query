import React from 'react';
import {
  QueryCache, ReactQueryCacheProvider,
} from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import {ThemeContext} from "context";
import {useTheme} from "hooks/useTheme";

import Todos from 'components/Todos/Todos';
import Example from 'components/Example/Example';
import Registrtaion from "../components/Registration/Registration";
import Login from "../components/Login/Login";
import PublicLayout  from '../modules/layouts/PublicLayout'
import PublicRoute from '../modules/PublicRoute';
import PrivateLayout from "../modules/layouts/PrivateLayout";
import PrivateRoute from "../modules/PrivateRoute";
import Navigator from "../modules/Navigator";
import Files from "../components/Files";
const queryCache = new QueryCache();

export default function App() {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <ThemeContext.Provider value={useTheme()}>
        <Router>
          <Switch>
            <PublicRoute
              path={'/registration'}
              layout={PublicLayout}
            >
              <Registrtaion />
            </PublicRoute>
            <PublicRoute
              path={'/login'}
              layout={PublicLayout}
            >
              <Login />
            </PublicRoute>
            <PrivateRoute
              path={'/todos'}
              layout={PrivateLayout}
            >
              <Todos />
            </PrivateRoute>
            <PrivateRoute
              path={'/files'}
              layout={PrivateLayout}
            >
              <Files />
            </PrivateRoute>
            <Route
              exact
              path={'/example'}>
              <Example />
            </Route>
            <Route
              exact
              path={'/'}>
              <Navigator />
            </Route>
          </Switch>
        </Router>
      {/*<ReactQueryDevtools initialIsOpen />*/}
      </ThemeContext.Provider>
    </ReactQueryCacheProvider>
  );
}
