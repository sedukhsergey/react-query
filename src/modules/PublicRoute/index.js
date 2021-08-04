import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getCookie } from "../../utils/cookie";
import { USER_COOKIE } from "../PrivateRoute";

const PublicRoute = ({ children, path }) => {
  return (
    <Route
      path={path}
      render={(props) => {
        const isAuthenticated = getCookie(USER_COOKIE);
        return isAuthenticated ? (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        ) : (
          <div>{children}</div>
        );
      }}
    />
  );
};

export default PublicRoute;
