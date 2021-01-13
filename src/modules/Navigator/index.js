import React from 'react';
import { Redirect } from 'react-router';

const Navigator = () => {
  const auth_token = localStorage.getItem('auth_token');
  if (auth_token) {
    return <Redirect to={`/todos`} />;
  }
  return <Redirect to={`/login`} />;
};

export default Navigator;
