import {useMutation, useQueryCache} from "react-query";
import {updateTodo} from "../../../api/todos";

export const useChangeTodo = () => {

  const cache = useQueryCache()
  return useMutation(updateTodo, {
    onSuccess: (response, variables) => {
      const cachedTodos = cache.getQueryData('todos')
      const updatedTodos = cachedTodos.map(todo => {
        if (todo.id === variables.id) {
          return variables
        }
        return todo;
      })
      cache.setQueryData('todos',updatedTodos);
      return Promise.resolve();
    },
    onError: () => {
      return Promise.reject();
    }
  })
}
