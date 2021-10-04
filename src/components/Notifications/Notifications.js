import React, { useState, useCallback, useEffect } from "react";
import io from "socket.io-client";

let socket;
const Notifications = () => {
  useEffect(() => {
    socket = io.connect("http://localhost:3030");
  }, []);

  const handleSetMessage = () => {
    socket.emit("message", "some test message");
  };

  useEffect(() => {
    socket.on("is_disconnect", (id) => {});

    socket.on("is_online", (user) => {
      console.log("online");
    });
  }, []);

  useEffect(() => {
    socket.on("msgToClient", (data) => {
      console.log("message from server", data);
    });
  });

  return (
    <div>
      <button onClick={handleSetMessage}>Click message</button>
    </div>
  );
};

export default Notifications;
