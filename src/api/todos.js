import axios from "axios";

export const createTodo = async (data) => {
  try {
    const response = await axios({
      method: 'POST',
      url: 'http://localhost:3030/todos',
      responseType: 'json',
      data,
      withCredentials: true,
    });
    return response.data;
  } catch (err) {
    console.error(err);
    return Promise.reject(err.response);
  }
};

export const updateTodo = async ({
  title,
  id
}) => {
  try {
    const response = await axios({
      method: 'PATCH',
      url: `http://localhost:3030/todos/${id}`,
      responseType: 'json',
      data: {
        title
      },
    });
    return response.data;
  } catch (err) {
    console.error(err);
    return Promise.reject(err.response);
  }
};


export const getTodos = async () => {
  try {
    const response = await axios({
      method: 'GET',
      url: 'http://localhost:3030/todos',
      responseType: 'json',
      withCredentials: true,
    });
    return response.data;
  } catch (err) {
    console.error(err);
    return Promise.reject(err.response);
  }
};

