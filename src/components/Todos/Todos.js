import React, { useState, useContext } from 'react';
import Todo from 'components/Todo';
import { useQuery } from 'react-query';
import { getTodos } from 'api/todos';
import { ThemeContext } from "context";
import { useAddTodo } from './hooks/useAddTodo';
import styles from './styles.module.css';
import { themes } from "../../themes";

function Todos() {
  const [theme, setTheme] = useContext(ThemeContext);
  const [todo, setTodo] = useState('');

  const {
    isLoading, error, data,
  } = useQuery('todos', getTodos);

  const { mutateAsync, isLoading: isUpdating } = useAddTodo();

  const handleAddTodo = async () => {
    try {
      await mutateAsync({ title: todo });
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
      <button onClick={() => setTheme(theme.name === 'light' ? themes.dark : themes.light)}>Change theme to {theme.name === 'light' ? 'DARK' : 'LIGHT'}</button>
      <div style={{
        background: theme.background
      }}>
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
