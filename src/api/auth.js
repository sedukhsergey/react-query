import axiosWrapper from "./axiosInterceptor";

export const registration = async (data) => {
  try {
    const response = await axiosWrapper({
      method: "POST",
      url: "http://localhost:3030/auth/registration",
      responseType: "json",
      data,
      withCredentials: true,
    });
    return response.data;
  } catch (err) {
    return Promise.reject(err.response);
  }
};

export const login = async (data) => {
  try {
    const response = await axiosWrapper({
      method: "POST",
      url: "http://localhost:3030/auth/log-in",
      responseType: "json",
      data,
      withCredentials: true,
    });
    return response.data;
  } catch (err) {
    return Promise.reject(err.response);
  }
};

export const logOut = async () => {
  try {
    const response = await axiosWrapper({
      method: "PATCH",
      url: "http://localhost:3030/auth/log-out",
      responseType: "json",
      withCredentials: true,
    });
    return response.data;
  } catch (err) {
    return Promise.reject(err.response);
  }
};

export const refreshToken = async (data) => {
  try {
    const response = await axiosWrapper({
      method: "POST",
      url: "http://localhost:3030/auth/refresh",
      responseType: "json",
      data,
      withCredentials: true,
    });
    return response.data;
  } catch (err) {
    return Promise.reject(err.response);
  }
};
