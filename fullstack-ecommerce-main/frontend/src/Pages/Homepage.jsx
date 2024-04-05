import React from 'react';
import Hero from '../components/Hero/Hero';
import AllCategories from '../components/AllCategories/AllCategories';
import NewCollection from '../components/NewCollection/NewCollection';
import Newsletter from '../components/Newsletter/Newsletter';
import TrendingProduct from '../components/TrendingProduct/TrendingProduct';


const Homepage = () => {
  return (
    <div className='homepage'>
    <Hero/>
    <TrendingProduct/>
    <AllCategories/>
    <NewCollection/>
    <Newsletter/>
    </div>
  )
}

export default Homepage