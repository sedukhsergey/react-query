import React from 'react';
import { Redirect } from 'react-router';
import {getCookie} from "../../utils/cookie";

const Navigator = () => {
  const auth_token =  getCookie('auth_token');
  if (auth_token) {
    return <Redirect to={`/todos`} />;
  }
  return <Redirect to={`/login`} />;
};

export default Navigator;
