import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header>
        <div>
          <img src="/nextby-white.png" alt="logo" className="logo" />
        </div>
        <nav>
          <ul>
            <li>
              <NavLink>Hello</NavLink>
            </li>
            <li>
              <NavLink>Contact</NavLink>
            </li>
            <li>
              <NavLink>About us</NavLink>
            </li>
            <li>
              <NavLink>Services</NavLink>
            </li>
            <li>
              <NavLink>More</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
