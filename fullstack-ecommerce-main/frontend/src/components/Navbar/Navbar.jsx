import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import './Navbar.css';
import person_icon from '../../assets/person_icon.png';
import cart_icon from '../../assets/cart_icon.png';
import logout_icon from '../../assets/logout.png';
import { CategoriesContext } from '../Context/CatergoriesContext';


const Navbar = () => {

const {getTotalCartItems} = useContext(CategoriesContext);

  return (
    <div className="navbar">
        <div className="navwrapper">
        <div className="left">
          <Link className ="link" to="/">FASHIONSTORE</Link>
        </div>
        <div className="center">
           <ul className='item'>
                <li><Link  className="link" to='/women'>Women</Link></li>
                <li><Link className="link" to='/men'>Men</Link></li>
                <li><Link className="link" to='/children'>Children</Link></li>
            </ul>
            </div>
            <div className="right">
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