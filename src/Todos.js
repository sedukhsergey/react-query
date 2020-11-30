import React, { useState } from 'react';
import Todo from 'components/Todo';
import { useQueryCache, useQuery, useMutation } from "react-query";
import { createTodo, getTodos, updateTodo } from "api/todos";


function Todos() {
  const cache = useQueryCache()
  const [todo, setTodo] = useState('');
  const [isEditable, setIsEditable] = useState(false);

const { isLoading, error, data } = useQuery('todos', getTodos)


  const [addTodo] = useMutation(createTodo, {
    onSuccess: () => {
      cache.invalidateQueries('todos')
      setTodo('');
    },
  })

  const [changeTodo] = useMutation(updateTodo, {
    onSuccess: () => {
      cache.invalidateQueries('todos')
      setTodo('');
    },
  })


  if (error) {
    return <div>{error.message}</div>
  }

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {data?.map(todo => (
            <Todo key={todo.id} todo={todo}/>
          ))}
        </ul>
      )}
      <br />
      <div>
        <label htmlFor="todo">Todo</label>
        <input type="text" name={'todo'} value={todo} onChange={e => setTodo(e.currentTarget.value)}/>
      </div>
      <button
        onClick={() =>
          addTodo({
            title: todo
          })
        }
      >
        Add Todo
      </button>
    </div>
  )
}

export default Todos;
