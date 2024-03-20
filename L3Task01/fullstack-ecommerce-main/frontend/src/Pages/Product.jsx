import React, { useContext } from 'react';
import { useParams } from 'react-router-dom'
import Breadcrum from '../components/Breadcrums/Breadcrum.jsx';
import { CategoriesContext } from '../components/Context/CatergoriesContext.jsx'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay.jsx';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox.jsx';
import Relatedproduct from '../components/RelatedProduct/Relatedproduct.jsx';


const Product = (props) => {

  const { all_product } = useContext(CategoriesContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId))


  return (
    
    <div>
       <Breadcrum product={product}/> 
       <ProductDisplay product={product}/> 
       <DescriptionBox/>
       <Relatedproduct/>
    </div>
  )
}

export default Product