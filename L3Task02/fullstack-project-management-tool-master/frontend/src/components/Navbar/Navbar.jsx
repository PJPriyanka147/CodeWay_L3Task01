import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="nav-left">
        <div className="navbar_logo">
         <h1>Project Planner</h1>
        </div>
        </div>
        <div className="nav-right">
        <div className="navbar_buttons">
            <button>Sign In</button>
            <button>Sign Out</button>
        </div>
        </div>
    </div>
  )
}

export default Navbar