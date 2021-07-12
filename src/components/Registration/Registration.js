import React, { useState } from 'react';
import { useHistory, Link } from "react-router-dom";
import styles from './styles.module.css';
import { useRegistration } from "./hooks/registration";

const Registrtaion = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {
    isLoading,
    error,
    mutateAsync
  } = useRegistration();
  const handleSubmit = async () => {
    if (email && password) {
     await mutateAsync({email, password, history})
    }
  }
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      <input onChange={(e) => setEmail(e.target.value)} type="text" value={email}/>
      <input onChange={(e) => setPassword(e.target.value)} type="password" value={password}/>
      <button onClick={handleSubmit}>Submit</button>
      <br/>
      {error && <p className={styles.error}>{error?.data?.message}</p>}
      <Link to={'/login'}>Navigate to Login</Link>
    </div>
  )
}

export default Registrtaion;
