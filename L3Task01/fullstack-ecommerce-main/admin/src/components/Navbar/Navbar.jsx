import React from 'react'
import './Navbar.css';
import userprofile from '../../assets/profile-user.png';
import dropdown_icon from '../../assets/dropdown_icon.png';


const Navbar = () => {
  return (
    <div className='navbar'>
    <div className="nav-left"> FASHIONSTORE </div>
    <div className="nav-right">
      <div className="right-container">
        <img  src={userprofile} alt="" />
        <img src={dropdown_icon} alt="" />
        </div>
    </div>

    </div>
  )
}

export default Navbar