import React, { useState, useEffect } from "react";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import { useHistory, Link } from "react-router-dom";
import { useConfirm } from "./hooks/useConfirm";
const fpPromise = FingerprintJS.load();

const Confirm = () => {
  const history = useHistory();
  const [visitorId, setVisitorId] = useState("");
  const [sixDigitsNumber, setSixDigitsNumber] = useState("");
  const [password, setPassword] = useState("");
  const { mutateAsync, isLoading, error } = useConfirm();
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
    if (sixDigitsNumber) {
      try {
        await mutateAsync({
          fingerprint: visitorId,
          userAgent: "web-application",
          sixDigitsNumber: Number(sixDigitsNumber),
          history,
          authMethod: "basic",
          isRememberMe: true,
        });
      } catch (err) {
        console.log("err", err);
      }
    }
  };
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      <input
        onChange={(e) => setSixDigitsNumber(e.target.value)}
        type="text"
        value={sixDigitsNumber}
      />
      <button onClick={handleSubmit}>Submit</button>
      <br />
      <Link to={"/registration"}>Navigate to Registration</Link>
    </div>
  );
};

export default Confirm;
