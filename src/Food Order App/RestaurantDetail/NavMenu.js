import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  const navStyle = {
    color: "white",
  };
  return (
    <nav>
      <ul className="nav-links">
        <Link style={navStyle} to="/MenuList">
          <li>Menu</li>
        </Link>

        {/* <Link style={navStyle} to="/OrderOnline">
          <li>Order Online</li>
        </Link>

        <Link style={navStyle} to="/Review">
          <li>Review</li>
        </Link>
        <Link style={navStyle} to="/Gallery">
          <li>Gallery</li>
        </Link> */}
      </ul>
    </nav>
  );
};
