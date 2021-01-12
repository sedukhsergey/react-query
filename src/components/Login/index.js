import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import styles from './styles.module.css';

const Login = () => {
  const history = useHistory();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = () => {
    if (login && password) {
      localStorage.setItem('auth_token', 'some token')
      history.push('/todos')
    }
  }
  return (
    <div>
      <input onChange={(e) => setLogin(e.target.value)} type="text" value={login}/>
      <input onChange={(e) => setPassword(e.target.value)} type="password" value={password}/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login;
