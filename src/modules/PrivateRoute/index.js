import React from "react";
import { Route, Redirect } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { getCookie } from "../../utils/cookie";
export const ACCESS_TOKEN = "Authentication";
export const REFRESH_TOKEN = "Refresh";
export const USER_COOKIE = "User";

const PrivateRoute = ({ layout: Layout, children, path }) => (
  <Route
    path={path}
    render={(props) => {
      const isAuthenticated = getCookie(USER_COOKIE);

      if (isAuthenticated) {
        console.log(jwtDecode(isAuthenticated));
      }
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
