import React, { useState, useCallback, useEffect } from "react";
import io from "socket.io-client";
import { getCookie } from "../../utils/cookie";
import { AUTHENTICATION_COOKIE } from "../../api/axiosInterceptor";

let socket;
const Notifications = () => {
  useEffect(() => {
    socket = io.connect("http://localhost:6030", {
      reconnection: true,
      reconnectionDelay: 10000,
      // reconnectionDelayMax: 10000,
      // reconnectionAttempts: 3,
      auth: {
        token: localStorage.getItem("token"),
      },
    });
  }, []);

  const handleSetMessage = () => {
    socket.emit("get_all_messages", {
      offset: 0,
      limit: 100,
    });
  };

  useEffect(() => {
    socket.on("disconnect", (reason) => {
      console.log("reason", reason);
      if (reason === "io server disconnect") {
        // the disconnection was initiated by the server, you need to reconnect manually
        socket.connect();
      }
      // else the socket will automatically try to reconnect
    });
  }, []);

  useEffect(() => {
    socket.on("all_messages", (data) => {
      console.log("all_messages", data);
    });
  }, []);
  //
  // useEffect(() => {
  //   socket.on("notification", (data) => {
  //     console.log("new notification", data);
  //   });
  // }, []);

  return (
    <div>
      <button onClick={handleSetMessage}>Click message</button>
    </div>
  );
};

export default Notifications;
