import React, { useState } from 'react';
import { useTodo } from "./useTodo";
import styles from './styles.module.css';
import {useMutation, useQueryCache} from "react-query";
import {updateTodo} from "api/todos";

const Todo = ({
  todo: {
    id,
    title = ''
  }
}) => {
  const cache = useQueryCache()
  console.log('test2',)
  const [isEditable, setIsEditable] = useState(false);
  const [text, setText] = useTodo(title);

  const [changeTodo] = useMutation(updateTodo, {
    onSuccess: () => {
      cache.invalidateQueries('todos')
      setIsEditable(state => !state);
    },
  })
  console.log('test1',)
  console.log('test3',)
  return (
    isEditable ? (
      <input
        className={styles.inputItem}
        type="text"
        value={text}
        onChange={e => {
          setText(e.target.value)
        }}
        autoFocus
        onBlur={() => changeTodo({
          id,
          title: text
        })}
      />
    ) : (
      <li
        className={styles.item}
        onClick={() => {
        setIsEditable(state => !state);
      }}>{title}</li>
    )
  )
}

export default Todo;
