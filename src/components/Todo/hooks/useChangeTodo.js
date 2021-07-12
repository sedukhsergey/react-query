import {
  useMutation, useQueryClient,
} from 'react-query';
import { updateTodo } from '../../../api/todos';

export const useChangeTodo = () => {
  const queryClient = useQueryClient();
  return useMutation(updateTodo, {
    onSuccess: (response, variables) => {
      const cachedTodos = queryClient.getQueryData('todos');
      const updatedTodos = cachedTodos.map(todo => {
        if (todo.id === variables.id) {
          return variables;
        }
        return todo;
      });
      queryClient.setQueryData('todos', updatedTodos);
    },
    onError: err => Promise.reject(err),
  });
};
