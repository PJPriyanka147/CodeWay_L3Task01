import React, { useContext } from 'react';
import './CSS/Categories.css';
import { CategoriesContext } from '../components/Context/CatergoriesContext';
import dropdown_icon from '../assets/dropdown_icon.png';
import Item from '../components/Item/Item';

const Categories = (props) => {

  const {all_product} = useContext(CategoriesContext)  

  return (
   
    <div className='categories'>
      <img className="category-banner"  src={props.banner} alt="" />
      <div className="catergory-indexSort">
        <p>
          <span>Showing 1-12 </span> out of 36 products
        </p>
        <div className="category-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="category-products">
        {all_product.map((item , i)=>{
          if (props.category===item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else {
            return null;
          }
        })}
      </div>
      <div className="category-product-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default Categories