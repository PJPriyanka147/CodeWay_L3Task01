import React from 'react';
import dataProduct from '../../assets/data';
import Item from '../Item/Item';
import './TrendingProduct.css';


const  TrendingProduct = () => {
  return (
    <div className='trendingProduct'>
        <h1> Our Trending Products</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
<div className="dataproduct">
{dataProduct.map((item,i )=>{
 return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
})}
    
  
</div>
    </div>
  )
}

export default TrendingProduct