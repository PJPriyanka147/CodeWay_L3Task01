import React from 'react'
import all_product from '../../assets/all_product'
import Item from '../Item/Item'
import './AllProduct.css';

const AllProduct = () => {
  return (
    <div className='allproduct'>
        <div className="all_product_item">
            {all_product.map((item ,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>}
             )}
        </div>
    </div>
  )
}

export default AllProduct