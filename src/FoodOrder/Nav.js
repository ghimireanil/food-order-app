import React from 'react';
import { Link } from 'react-router-dom';
import './mystyle.css';

const Nav = () => {
  return (
    <nav>
      <h3>FoodHub</h3>
      <ul className='nav-links'>
        <li>
          <Link to='/homepage'>Home page</Link>
        </li>
        <li>
          <Link to='/signin'>Sign in</Link>
        </li>
        <li>
          <Link to='/signup'>Sign up</Link>
        </li>
        <li>
          <Link to='/findResturant'>Find Nearby Resturants</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
