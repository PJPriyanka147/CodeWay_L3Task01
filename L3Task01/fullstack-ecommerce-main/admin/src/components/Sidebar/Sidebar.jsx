import React from 'react'
import './Sidebar.css'
import {Link} from  'react-router-dom';
import add_product_icon from '../../assets/add_product.png';
import all_product_icon from '../../assets/all_product.png';


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to='/addproduct' style={{textDecoration:'none'}}>
        <div className="sidebar-items">
            <img src={add_product_icon} alt="" />
            <p>Add Products</p>
        </div>
        </Link>
        <Link to='/listproduct' style={{textDecoration:'none'}}>
        <div className="sidebar-items">
            <img src={all_product_icon} alt="" />
            <p>Product List</p>
        </div>
        </Link>
    </div>
  )
}

export default Sidebar