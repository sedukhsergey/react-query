import React from 'react';
import {
  Route, Redirect,
} from 'react-router-dom';

const PublicRoute = ({
  layout: Layout,
  children,
  path
}) => (
  <Route
    path={path}
    render={props => {
      const authToken = localStorage.getItem('auth_token');
      return typeof authToken === 'string' ? (
        <Redirect
          to={{
            pathname: '/',
            state: { from: props.location },
          }}
        />
      ) : (
        <Layout>
          {children}
        </Layout>
      );
    }}
  />
);

export default PublicRoute;
