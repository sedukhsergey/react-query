import {
  useMutation, useQueryCache,
} from 'react-query';
import { deleteTodo } from '../../../api/todos';

export const useDeleteTodo = () => {
  const cache = useQueryCache();
  return useMutation(deleteTodo, {
    onSuccess: (response, { id }) => {
      const cachedTodos = cache.getQueryData('todos');
      const updatedTodos = cachedTodos.filter(todo => todo.id !== id);
      cache.setQueryData('todos', updatedTodos);
    },
  });
};
