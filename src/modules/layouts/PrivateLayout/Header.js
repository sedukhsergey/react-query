import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from "../../../components/NavBar/NavBar";

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <NavBar />
      <div className="flex justify-center">
        Header
      </div>
      <div
        className='text-white text-right hover:cursor-pointer'
        onClick={() => setIsOpen(state => !state)}
      >
        Menu
      </div>
    </div>
  );
};


export default Header;
