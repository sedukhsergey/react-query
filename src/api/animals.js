import axios from 'axios';

export const getCats = async () => {
  try {
    const response = await axios({
      method: 'GET',
      url: 'http://localhost:3030/animals/cats',
      responseType: 'text',
    });
    return response.data;
  } catch (err) {
    console.error(err);
    return Promise.reject(err.response);
  }
};
