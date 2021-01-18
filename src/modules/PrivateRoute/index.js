import React from 'react';
import {
  Route, Redirect,
} from 'react-router-dom';
import { getCookie } from "../../utils/cookie";

const PrivateRoute = ({
   layout: Layout,
   children,
   path,
 }) => (
  <Route
    path={path}
    render={props => {
      const isAuthenticated = getCookie('auth_token');
      return isAuthenticated  ? (
        <Layout>
          {children}
        </Layout>
      ) : (
        <Redirect
          to={{
            pathname: 'login',
            state: { from: props.location },
          }}
        />
      );
    }}
  />
);

export default PrivateRoute;
