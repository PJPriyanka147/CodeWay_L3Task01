import React from 'react';
import Hero from '../components/Hero/Hero';
import FeaturedProduct from '../components/FeaturedProduct/FeaturedProduct';
import AllCategories from '../components/AllCategories/AllCategories';


const Homepage = () => {
  return (
    <div className='hero'>Homepage
    <Hero/>
    <FeaturedProduct/>
    <AllCategories/>
      
    </div>
  )
}

export default Homepage