import React, { useState } from 'react';
import { useQuery } from 'react-query';

const Example = () => {
  const [name, setName] = useState('')
  const { isLoading, error, data } = useQuery('animalsData', () =>
    fetch('http://localhost:3030/animals/cats').then(res => {
      return res.json();
      }
    )
  )

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message
  return (
    <div>{
      data.map(({name, id}) => {
        return (
          <div key={id}>{name}</div>
        )
      })
    }
    <button onClick={() => setName(state => state + '3')}>{name}</button>
    </div>
  )
}

export default Example;
