import React from 'react';

const Todo = ({
  todo: {
    id,
    title = ''
  }
}) => {
  return (
    <li>{title}</li>
  )
}

export default Todo;
