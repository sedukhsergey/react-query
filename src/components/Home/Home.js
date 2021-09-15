import React from "react";
import { useQuery } from "react-query";
import { getTeams, getTodos } from "../../api/todos";
import { getCookie } from "../../utils/cookie";
import { USER_COOKIE } from "../../modules/PrivateRoute";

export const Home = () => {
  const Authentication = getCookie("Authentication");
  const { isLoading, error, data } = useQuery("teams", getTeams);
  return <div>Home</div>;
};
