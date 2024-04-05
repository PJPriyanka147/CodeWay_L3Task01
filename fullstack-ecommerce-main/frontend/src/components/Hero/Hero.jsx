import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <div classname="hero">
      <div className="herowrapper">
       <div className="imagecontainer01">
        <img src="https://images.unsplash.com/photo-1677358678842-fb944c5e54e5?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
       </div>
       <p>Find Your Fashion Inspiration: <span className='ourcollection'>Explore Our Collections</span> </p>
      <Link to='/allproduct'><button>Shop Now</button></Link> 
       
       <div className="imagecontainer02">
        <img src="https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=''/>
       </div>
       </div>
    </div>
  )
}

export default Hero