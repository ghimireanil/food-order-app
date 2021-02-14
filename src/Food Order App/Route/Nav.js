import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export const Nav = () => {
  const navStyle = {
    color: 'white',
  };
  return (
    <nav className='navi'>
      <ul className='nav-links'>
        <Link style={navStyle} to='/Menu'>
          <li>Menu</li>
        </Link>

        <Link style={navStyle} to='/OrderOnline'>
          <li>Order Online</li>
        </Link>

        <Link style={navStyle} to='/Review'>
          <li>Review</li>
        </Link>
        <Link style={navStyle} to='/Gallery'>
          <li>Gallery</li>
        </Link>
      </ul>
    </nav>
  );
};
