import React from "react";
import { Redirect } from "react-router";
import { getCookie } from "../../utils/cookie";
import { EXPIRATION_COOKIE } from "../PrivateRoute";

const Navigator = () => {
  const isAuthenticated = getCookie(EXPIRATION_COOKIE);
  if (isAuthenticated) {
    return <Redirect to={`/home`} />;
  }
  return <Redirect to={`/login`} />;
};

export default Navigator;
