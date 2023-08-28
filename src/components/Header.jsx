import React from "react";
import { NavLink } from "react-router-dom";
import Services from '../pages/Services';
const Header = () => {
  return (
    <div className="header">
      <h1>CRUD APP</h1>
      <ul className="nav">
        <li>
          <NavLink to="/" end>Home</NavLink>
        </li>
        <li>
          <NavLink to="/post/add">Add Post</NavLink>
        </li>
        <li className="login">login</li>
        <li>
        <NavLink to="/services">services</NavLink>
        </li>
        <li>
        <NavLink to="/lazy">Lazy</NavLink>
        </li>
        <li>
        <NavLink to="/lazy2">Lazy2</NavLink>
        </li>


      </ul>
    </div>
  );
};

export default Header;
