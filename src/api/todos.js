import axiosWrapper from "./axiosInterceptor";

export const createTodo = async (data) => {
  try {
    const response = await axiosWrapper({
      method: "POST",
      url: "http://localhost:3030/todos",
      responseType: "json",
      data,
      withCredentials: true,
    });
    return response.data;
  } catch (err) {
    console.error(err);
    return Promise.reject(err.response);
  }
};

export const updateTodo = async ({ title, id }) => {
  try {
    const response = await axiosWrapper({
      method: "PATCH",
      url: `http://localhost:3030/todos/${id}`,
      responseType: "json",
      data: { title },
    });
    return response.data;
  } catch (err) {
    console.error(err);
    return Promise.reject(err.response);
  }
};

// export const getTodos = async () => {
//   try {
//     const response = await axiosWrapper({
//       method: "GET",
//       url: "http://localhost:3030/todos",
//       responseType: "json",
//       withCredentials: true,
//     });
//     return response.data;
//   } catch (err) {
//     console.error(err);
//     return Promise.reject(err.response);
//   }
// };

export const getTodos = async () => {
  try {
    const response = await axiosWrapper({
      method: "GET",
      url: "http://localhost:3030/teams",
      responseType: "json",
      withCredentials: true,
    });
    return response.data;
  } catch (err) {
    return Promise.reject(err.response);
  }
};

export const deleteTodo = async ({ id }) => {
  try {
    const response = await axiosWrapper({
      method: "DELETE",
      url: `http://localhost:3030/todos/${id}`,
      responseType: "json",
    });
    return response.data;
  } catch (err) {
    console.error(err);
    return Promise.reject(err.response);
  }
};

export const getTeams = async () => {
  try {
    const response = await axiosWrapper({
      method: "GET",
      url: "http://localhost:3030/teams",
      responseType: "json",
      withCredentials: true,
    });
    return response.data;
  } catch (err) {
    console.error(err);
    return Promise.reject(err.response);
  }
};
