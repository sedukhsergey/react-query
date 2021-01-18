import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { deleteCookie } from "../../utils/cookie";

const NavBar = () => {
  const history = useHistory();
  const handleLogOut = () => {
    deleteCookie('auth_token')
    history.push('/login')
  }
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
            <button onClick={handleLogOut}>Lot Out</button>
          </li>
        </ul>
      </nav>
    </div>
  )
};

export default NavBar;
