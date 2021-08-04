import React, { useState, useEffect } from "react";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import { useHistory, Link } from "react-router-dom";
import styles from "./styles.module.css";
import { useLogin } from "./hooks/useLogin";
const fpPromise = FingerprintJS.load();

const Login = () => {
  const history = useHistory();
  const [visitorId, setVisitorId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutateAsync, isLoading, error } = useLogin();
  useEffect(() => {
    (async () => {
      // Get the visitor identifier when you need it.
      const fp = await fpPromise;
      const result = await fp.get();

      // This is the visitor identifier:
      setVisitorId(result.visitorId);
    })();
  }, []);
  const handleSubmit = async () => {
    if (email && password) {
      await mutateAsync({
        fingerprint: visitorId,
        userAgent: "web-application",
        email,
        password,
        history,
        authMethod: "basic",
        isRememberMe: true,
      });
    }
  };
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        value={email}
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        value={password}
      />
      <button onClick={handleSubmit}>Submit</button>
      {error && <p className={styles.error}>{error?.data?.message}</p>}
      <br />
      <Link to={"/registration"}>Navigate to Registration</Link>
    </div>
  );
};

export default Login;
