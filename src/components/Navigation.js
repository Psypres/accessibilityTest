import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav role="navigation" aria-label="Main navigation">
      <ul className="nav-list">
        <li>
          <NavLink 
            to="/accessible" 
            className={({ isActive }) => isActive ? 'active' : ''}
            aria-current={({ isActive }) => isActive ? 'page' : undefined}
          >
            Accessible Version
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/non-accessible" 
            className={({ isActive }) => isActive ? 'active' : ''}
            aria-current={({ isActive }) => isActive ? 'page' : undefined}
          >
            Non-Accessible Version
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation; 