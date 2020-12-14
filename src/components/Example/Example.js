import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getCats } from 'api/animals';


const Example = () => {
  const [name, setName] = useState('');
  const {
    isLoading, error, data,
  } = useQuery('animalsData', getCats);

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div>{data}
      <button onClick={() => setName(state => state + '3')}>{name}</button>
    </div>
  );
};

export default Example;
