import React from 'react';
import { QueryCache, ReactQueryCacheProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query-devtools'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Todos from 'components/Todos/Todos';
import Example from "components/Example/Example";
import NavBar from "components/NavBar/NavBar";

const queryCache = new QueryCache()

export default function App() {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path={'/todos'}>
            <Todos />
          </Route>
          <Route exact path={'/example'}>
            <Example />
          </Route>
          <Route exact path={'/'}>
            <div>Home</div>
          </Route>
        </Switch>
      </Router>
      <ReactQueryDevtools initialIsOpen />
    </ReactQueryCacheProvider>
  )
}
