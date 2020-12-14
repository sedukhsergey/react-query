import {
  useMutation, useQueryCache,
} from 'react-query';
import { createTodo } from '../../../api/todos';

export const useAddTodo = () => {
  const cache = useQueryCache();
  return useMutation(createTodo, {
    onSuccess: (response, variables) => {
      const cachedTodos = cache.getQueryData('todos');
      cache.setQueryData('todos', [...cachedTodos, {
        id: response.id, title: variables.title,
      }]);
      return Promise.resolve();
    },
    onError: () => Promise.reject(),
  });
};
