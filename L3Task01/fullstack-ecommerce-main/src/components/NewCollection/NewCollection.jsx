import React from 'react';
import './NewCollection.css';
import new_collection from '../../assets/new_collection';
import Item from '../Item/Item';

const NewCollection = () => {
  return (
    <div className="collection">
        <h1>New Collection</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        <div className="new_collection_item">
            {new_collection.map((item ,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>}
             )}
        </div>

    </div>
  )
}

export default NewCollection