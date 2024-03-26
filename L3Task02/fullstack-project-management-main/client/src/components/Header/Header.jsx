import React from 'react';
import './Header.css';

const Header = () => {
  return (
   <nav className='header'>
    <div className="header_logo">
        <h1>Project Planner</h1>
    </div>
    <div className="header_buttons">
        <button>Sign In</button>
        <button>Sign Out</button>
    </div>

   </nav>
  )
}

export default Header
