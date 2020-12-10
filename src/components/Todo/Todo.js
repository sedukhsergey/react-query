import React, { useState } from 'react';
import { useTodo } from "./useTodo";
import styles from './styles.module.css';
import { useDeleteTodo } from "./hooks/useDeleteTodo";
import {useChangeTodo} from "./hooks/useChangeTodo";

const Todo = ({
  todo: {
    id,
    title = ''
  }
}) => {

  const [isEditable, setIsEditable] = useState(false);
  const [text, setText] = useTodo(title);
  const [deleteTodo, { isLoading: isDeleteLoading }] = useDeleteTodo();
  const [changeTodo, { isLoading: isChangeLoading }] = useChangeTodo()

  const handleChangeTodo = async () => {
    try {
      await changeTodo({
        id,
        title: text
      })
      setIsEditable(state => !state);
    } catch (error) {
      console.log('delete todo error',)
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
          onClick={() => setIsEditable(state => !state)}>{title}</li>
        <button
          onClick={() => deleteTodo({id})}
          className={styles.deleteBtn}
          disabled={isDeleteLoading}
        >Delete</button>
      </div>
    )
  )
}

export default Todo;
