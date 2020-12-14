import axios from 'axios';

export const getFiles = async () => {
  try {
    const response = await axios({
      method: 'GET',
      url: 'http://localhost:3030/user-files/descriptions',
      responseType: 'json',
    });
    return response.data;
  } catch (err) {
    console.error(err);
    return Promise.reject(err.response);
  }
};


export const addFiles = async data => {
  try {
    const response = await axios({
      method: 'POST',
      url: 'http://localhost:3030/user-files',
      responseType: 'json',
      data,
    });
    return response.data;
  } catch (err) {
    return Promise.reject(err.response || err);
  }
};

