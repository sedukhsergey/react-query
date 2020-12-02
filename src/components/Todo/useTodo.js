import { useEffect, useState } from 'react';


export const useTodo = (title) => {
  const [data, setData] = useState('');

  useEffect(() => {
    if (title) {
      setData(title);
    }
  },[title])

  return [data, setData];
}
