import React, { useEffect, useState } from "react";
import { useRefreshToken } from "./hooks/useRefreshToken";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
const fpPromise = FingerprintJS.load();

const Example = () => {
  const { mutateAsync, isLoading, error } = useRefreshToken();
  const [visitorId, setVisitorId] = useState("");

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
    await mutateAsync({
      fingerprint: visitorId,
      userAgent: "web-application",
      isRememberMe: true,
    });
  };

  return (
    <div>
      <button onClick={handleSubmit}>Click</button>
    </div>
  );
};

export default Example;
