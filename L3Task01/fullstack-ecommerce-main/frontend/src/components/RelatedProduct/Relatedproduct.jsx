import React from 'react';
import './RelatedProduct.css';
import data from '../../assets/data.js';
import Item from '../../components/Item/Item'

const Relatedproduct = () => {
  return (
    <div className='relatedproduct'>
        <h1>Related Products</h1>
        <hr />
        <div className="related-products-item">
         {data.map((item, i)=>{
            return <Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
         })}
        </div>
    </div>
  )
}

export default Relatedproduct