import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Tailwind = () => {
  const location = useLocation();

  const isActive = (currentPath) => {
    return location.pathname.includes(currentPath) ? "text-black" : "text-red-100";
  };

  return (
    <div>
      <ul className='flex text-white bg-purple-800 justify-center'>
        <NavLink to="/" className={`my-4 mx-4 cursor-pointer ${isActive('/Home')}`}>PasswordGenerator</NavLink>
        <NavLink to="/About" className={`my-4 mx-4 cursor-pointer ${isActive('/About')}`}>About</NavLink>
        <NavLink to="/Contact" className={`my-4 mx-4 cursor-pointer ${isActive('/Contact')}`}>Contacts</NavLink>
      </ul>
    </div>
  );
};

export default Tailwind;
