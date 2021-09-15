import React from "react";

import { Redirect } from "react-router";
import { getCookie } from "../../utils/cookie";
import { USER_COOKIE } from "../PrivateRoute";

const Navigator = () => {
  const isAuthenticated = getCookie(USER_COOKIE);
  if (isAuthenticated) {
    return <Redirect to={`/home`} />;
  }
  return <Redirect to={`/login`} />;
};

export default Navigator;
