import {
  useMutation, useQueryClient,
} from 'react-query';
import { createTodo } from '../../../api/todos';

export const useAddTodo = () => {
  const queryClient = useQueryClient();
  return useMutation(createTodo, {
    onSuccess: (response, variables) => {
      const cachedTodos = queryClient.getQueryData('todos');
      queryClient.setQueryData('todos', [...cachedTodos, {
        id: response.id, title: variables.title,
      }]);
      return Promise.resolve();
    },
    onError: () => Promise.reject(),
  });
};
