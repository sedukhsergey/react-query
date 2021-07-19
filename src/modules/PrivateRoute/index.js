import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getCookie } from "../../utils/cookie";
export const ACCESS_TOKEN = "Authentication";
export const REFRESH_TOKEN = "Refresh";
export const EXPIRATION_COOKIE = "Expiration";

const PrivateRoute = ({ layout: Layout, children, path }) => (
  <Route
    path={path}
    render={(props) => {
      const isAuthenticated = getCookie(EXPIRATION_COOKIE);

      console.dir({ isAuthenticated });
      return isAuthenticated ? (
        <Layout>{children}</Layout>
      ) : (
        <Redirect
          to={{
            pathname: "login",
            state: { from: props.location },
          }}
        />
      );
    }}
  />
);

export default PrivateRoute;
