import React, { useContext, useRef, useState } from 'react'
import { Link } from "react-router-dom";
import './Navbar.css';
import person_icon from '../../assets/person_icon.png';
import cart_icon from '../../assets/cart_icon.png';
import logout_icon from '../../assets/logout.png';
import { CategoriesContext } from '../Context/CatergoriesContext';
import nav_dropdown from '../../assets/nav_dropdown.png';

const Navbar = () => {

const {getTotalCartItems} = useContext(CategoriesContext);
const menuRef = useRef();

const dropdown_toggle = (e) => {
  menuRef.current.classList.toggle("nav-menu-visible");
  e.target.classList.toggle('open');
};

  return (
    <div className="navbar">
        <div className="navwrapper">
        <div className="left">
         <img onClick={dropdown_toggle} src={nav_dropdown} alt="" />
           <ul  ref={menuRef} className='item'>
                <li><Link  className="link" to='/women'>Women</Link></li>
                <li><Link className="link" to='/men'>Men</Link></li>
                <li><Link className="link" to='/children'>Children</Link></li>
                <li><Link  className="link" to='/accessories'>Accessories</Link></li>
            </ul>
      
            </div>
            <div className="center">
          <Link className ="link" to="/">FASHIONSTORE</Link>
        </div>
            <div className="right">
            <ul className='item'>
            <li><Link className="link"  to='/home'>Homepage</Link></li>
                <li><Link  className="link"  to='/about'>About</Link></li>
                <li><Link  className="link"   to='/contact'>Contacts</Link></li> 
            </ul>
            <div className="nav-login-cart">
              {localStorage.getItem('auth-token')? <img onClick ={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}src={logout_icon} alt=''/>
              : <Link   className="link" to='/login'><img src={person_icon} alt='' /></Link>}
               
                <Link  className="link"   to='/cart'><img src={cart_icon} alt='' /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
            </div> 
            </div>
        </div>
  )
}

export default Navbar