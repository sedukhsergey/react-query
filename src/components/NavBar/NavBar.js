import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const NavBar = () => {
  const history = useHistory();
  const handleLogOut = () => {
    localStorage.clear();
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
