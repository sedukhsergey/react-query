import React, { useState } from 'react';
import { useHistory, Link } from "react-router-dom";
import styles from './styles.module.css';
import { useLogin } from "./hooks/useLogin";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, {
    isLoading,
    error,
  }] = useLogin();
  const handleSubmit = async () => {
      if (email && password) {
        await login({email, password, history})
      }
  }
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      <input onChange={(e) => setEmail(e.target.value)} type="text" value={email}/>
      <input onChange={(e) => setPassword(e.target.value)} type="password" value={password}/>
      <button onClick={handleSubmit}>Submit</button>
      {error && <p className={styles.error}>{error?.data?.message}</p>}
      <br/>
      <Link to={'/registration'}>Navigate to Registration</Link>
    </div>
  )
}

export default Login;
