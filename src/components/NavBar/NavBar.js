import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useLogOut } from "./hooks/logOut";

const NavBar = () => {
  const history = useHistory();
  const { mutateAsync, isLoading, error } = useLogOut();
  const handleLogOut = async () => {
    const data = await mutateAsync({ history });
    console.log("data", data);
  };
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/todos">Todos</Link>
          </li>
          <li>
            <Link to="/example">Example</Link>
          </li>
          <li>
            <Link to="/files">Files</Link>
          </li>
          <li>
            <Link to="/notifications">Notifications</Link>
          </li>
          <li>
            <Link to="/audio">Audio</Link>
          </li>
          <li>
            <button onClick={handleLogOut}>Lot Out</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
