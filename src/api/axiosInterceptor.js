import axios from "axios";
import { getCookie } from "../utils/cookie";
export const USER_COOKIE = "User";
export const ADMIN = "admin";
export const REFRESH_COOKIE = "Refresh";
export const AUTHENTICATION_COOKIE = "Authentication";

const api = axios.create();

api.interceptors.request.use((config) => {
  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${getCookie(AUTHENTICATION_COOKIE)}`,
    },
  };
});

export default api;
