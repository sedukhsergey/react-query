import axiosWrapper from './axiosInterceptor'

export const registration = async data => {
  try {
    const response = await axiosWrapper({
      method: 'POST',
      url: 'http://localhost:3030/auth/registration',
      responseType: 'json',
      data,
      withCredentials: true,
    });
    return response.data;
  } catch (err) {
    return Promise.reject(err.response);
  }
};

export const login = async data => {
  try {
    const response = await axiosWrapper({
      method: 'POST',
      url: 'http://localhost:3030/auth/log-in',
      responseType: 'json',
      data,
      withCredentials: true,
    });
    return response.data;
  } catch (err) {
    return Promise.reject(err.response);
  }
};
