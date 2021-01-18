import axios from 'axios';
import { getCookie } from "../utils/cookie";

const api = axios.create();

api.interceptors.request.use((config) => {
  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: getCookie('auth_token'),
    },
  };
});

export default api;
