import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark p-3">
      <div className="container">
        <Link to={'/'} className="navbar-brand" ><span className="med">M E D</span>  <span>U Z</span> <span className="a">A</span></Link>
        <div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to={'/home'} className="nav-link" >Home</Link>
                </li>
                <li className="nav-item">
                    <Link to={'/about'} className="nav-link" >About us</Link>
                </li>
                <li className="nav-item">
                    <Link to={'/services'} className="nav-link" >Services</Link>
                </li>
                <li className="nav-item">
                    <Link to={'/blog'} className="nav-link" >Blogs</Link>
                </li>
                <li className="nav-item">
                    <Link to={'/projects'} className="nav-link" >Projects</Link>
                </li>
                <li className="nav-item">
                    <Link to={'/register'} className="nav-link" >Register</Link>
                </li>
                <li className="nav-item">
                    <Link to={'/login'} className="nav-link" >Login</Link>
                </li>
            </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
