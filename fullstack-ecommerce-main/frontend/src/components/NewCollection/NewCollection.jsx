import React from 'react';
import './NewCollection.css';
import new_collection from '../../assets/new_collection';
import Item from '../Item/Item';

const NewCollection = () => {
  return (
    <div className="collection">
        <h1>New Collection</h1>
        <p>From sophisticated essentials to statement pieces, our new arrivals embody the latest trends while offering timeless elegance. Elevate your style with our curated selection, crafted with quality and attention to detail. Explore our new collection today and discover the perfect pieces to refresh your look for any occasion.</p>
        <div className="new_collection_item">
            {new_collection.map((item ,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>}
             )}
        </div>

    </div>
  )
}

export default NewCollection