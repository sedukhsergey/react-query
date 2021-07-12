import {
  useMutation, useQueryClient,
} from 'react-query';
import { deleteTodo } from '../../../api/todos';

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteTodo, {
    onSuccess: (response, { id }) => {
      const cachedTodos = queryClient.getQueryData('todos');
      const updatedTodos = cachedTodos.filter(todo => todo.id !== id);
      queryClient.setQueryData('todos', updatedTodos);
    },
  });
};
