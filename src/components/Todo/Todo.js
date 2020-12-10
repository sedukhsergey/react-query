import React, { useState } from 'react';
import { useTodo } from "./useTodo";
import styles from './styles.module.css';
import { useDeleteTodo } from "./hooks/useDeleteTodo";
import {useChangeTodo} from "./hooks/useChangeTodo";

const Todo = ({
  todo
}) => {

  const [isEditable, setIsEditable] = useState(false);

  const [text, setText] = useTodo(todo.title);

  const [deleteTodo, { isLoading: isDeleteLoading,  }] = useDeleteTodo();

  const [changeTodo, {
    isLoading: isChangeLoading,
    reset
  }] = useChangeTodo()

  const handleChangeTodo = async () => {
    try {
      await changeTodo({
        id: todo.id,
        title: text
      })
      setIsEditable(state => !state);
    } catch(err) {
      setIsEditable(state => !state);
      setText(todo.title)
      reset();
    }
  }


  return (
    isEditable ? (
      <input
        className={styles.inputItem}
        type="text"
        value={text}
        disabled={isChangeLoading}
        onChange={e => setText(e.target.value)}
        autoFocus
        onBlur={handleChangeTodo}
      />
    ) : (
      <div className={styles.todoContainer}>
        <li
          className={styles.item}
          onClick={() => setIsEditable(state => !state)}>{todo.title}</li>
        <button
          onClick={() => deleteTodo({id: todo.id})}
          className={styles.deleteBtn}
          disabled={isDeleteLoading}
        >Delete</button>
      </div>
    )
  )
}

export default Todo;
