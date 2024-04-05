import React from 'react';
import dataProduct from '../../assets/data';
import Item from '../Item/Item';
import './TrendingProduct.css';


const  TrendingProduct = () => {
  return (
    <div className='trendingProduct'>
        <h1> Our Trending Products</h1>
        <p>Discover our latest collection of trending products, meticulously curated to elevate your style. From timeless classics to cutting-edge designs, we offer a diverse range of fashion-forward pieces to suit every taste and occasion. Explore our selection today and stay ahead of the curve with our must-have essentials.</p>
<div className="dataproduct">
{dataProduct.map((item,i )=>{
 return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
})}
    
  
</div>
    </div>
  )
}

export default TrendingProduct