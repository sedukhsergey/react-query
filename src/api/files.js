import axiosWrapper from "./axiosInterceptor";

export const getFilesMetaData = async () => {
  try {
    const response = await axiosWrapper({
      method: "GET",
      url: "http://localhost:3030/user-files/descriptions",
      responseType: "json",
    });
    return response.data;
  } catch (err) {
    console.error(err);
    return Promise.reject(err.response);
  }
};

export const updateFiles = async (data) => {
  try {
    const response = await axiosWrapper({
      method: "PUT",
      url: "http://localhost:3030/information-problem/team/1/player/4/information/7",
      responseType: "json",
      data,
    });
    return response.data;
  } catch (err) {
    return Promise.reject(err.response || err);
  }
};

export const addFiles = async (data) => {
  try {
    const response = await axiosWrapper({
      method: "POST",
      url: "http://localhost:3030/information-problem/team/1/player/4",
      responseType: "json",
      data,
    });
    return response.data;
  } catch (err) {
    return Promise.reject(err.response || err);
  }
};
