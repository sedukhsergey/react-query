import React, { useState } from 'react';
import Todo from 'components/Todo';
import { useQuery } from 'react-query';
import { getTodos } from 'api/todos';
import { useAddTodo } from './hooks/useAddTodo';
import styles from './styles.module.css';

function Todos() {
  const [todo, setTodo] = useState('');

  const {
    isLoading, error, data,
  } = useQuery('todos', getTodos);

  const [addTodo, { isLoading: isUpdating }] = useAddTodo();

  const handleAddTodo = async () => {
    try {
      await addTodo({ title: todo });
      setTodo('');
    } catch (err) {
    //
    }
  };
  if (error) {
    return <div>{error?.data?.message}</div>;
  }
  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul className={styles.list}>
          {data?.map(todo => (
            <Todo
              key={todo.id}
              todo={todo}/>
          ))}
        </ul>
      )}
      <br />
      <div>
        <label htmlFor="todo">Todo</label>
        <input
          disabled={isUpdating}
          type="text"
          name={'todo'}
          value={todo}
          onChange={e => setTodo(e.currentTarget.value)}/>
      </div>
      <button
        disabled={isUpdating}
        onClick={handleAddTodo}
      >
        Add Todo
      </button>
    </div>
  );
}

export default Todos;
