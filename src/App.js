import React from 'react';
import { QueryCache, ReactQueryCacheProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query-devtools'
import Todos from './Todos';

const queryCache = new QueryCache()

export default function App() {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <Todos />
      <ReactQueryDevtools initialIsOpen />
    </ReactQueryCacheProvider>
  )
}
