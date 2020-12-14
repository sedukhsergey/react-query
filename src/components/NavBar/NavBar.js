import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => (
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
      </ul>
    </nav>
  </div>
);

export default NavBar;
