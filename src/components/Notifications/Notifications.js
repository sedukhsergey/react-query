import React, { useState, useCallback, useEffect } from "react";
import io from "socket.io-client";
import { getCookie } from "../../utils/cookie";
import { AUTHENTICATION_COOKIE } from "../../api/axiosInterceptor";

let socket;
const Notifications = () => {
  useEffect(() => {
    socket = io.connect("http://localhost:3030", {
      auth: {
        token: getCookie(AUTHENTICATION_COOKIE),
      },
    });
  }, []);

  const handleSetMessage = () => {
    socket.emit("get_all_notifications", {
      offset: 0,
      limit: 100,
    });
  };

  useEffect(() => {
    socket.on("is_disconnect", (id) => {});

    socket.on("is_online", (user) => {
      console.log("online");
    });
  }, []);

  useEffect(() => {
    socket.on("all_notifications", (data) => {
      console.log("all notifications", data);
    });
  }, []);

  useEffect(() => {
    socket.on("notification", (data) => {
      console.log("new notification", data);
    });
  }, []);

  return (
    <div>
      <button onClick={handleSetMessage}>Click message</button>
    </div>
  );
};

export default Notifications;
