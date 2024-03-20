import React from 'react';
import './CSS/Cart.css';
import CartItems from '../components/CartItems/CartItems';

const Cart = () => {
  return (
    <div className='cart'>
      <CartItems/>
    </div>
  )
}

export default Cart