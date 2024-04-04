import { useContext } from 'react';
import './CartItems.css';
import { CategoriesContext } from '../Context/CatergoriesContext';
import remove_icon from '../../assets/cart_cross_icon.png';
import {loadStripe} from '@stripe/stripe-js';

const CartItems = () => {

    const { getTotalCartAmount, all_product, cartItems, removeFromCart} = useContext(CategoriesContext);

   
    //payment Integration
    const makePayment = async() => {
    console.log(all_product);
    console.log(cartItems);
    const stripe = await loadStripe("pk_test_51P1SBdSEXwTNKeYBXTOJP2lXtX51xNLTVoXWRSjX7BbT1jTL3sHQlv5Wr7JYzHawfLGqds2ay1IUDSGCEpqPbGSn003xcf9vLz");

   const body = {
       products:all_product,
       cart:cartItems
    }

     const headers = {
        'Content-Type':'application/json'
    }
   const response = await fetch("http://localhost:4000/checkout-session", {
       method:"POST",
       headers:headers,
       body:JSON.stringify(body)
    });

   const session = await response.json();

    const result = stripe.redirectToCheckout({
        sessionId:session.id
    });

    if (result.error){
        console.log(result.error);
    }

 }
   
  
  return (
    
    <div className='cartitems'>
        <div className="cartitems-main">
        <p>Products</p>   
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e)=>{
            if(cartItems[e.id]>0){
                return  <div>
                <div className="cartitem-format cartitems-main">
                <img src={e.image} alt="" className='carticon-product-icon' />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                <p>${e.new_price*cartItems[e.id]}</p>
                <img className='cartitems-remove-icon' src={remove_icon} alt="" onClick={()=>{removeFromCart(e.id)}} />
                </div>
                <hr />
                </div>
            }
            return null;
            
        })}
       <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>Cart Totals</h1>
            <div>
                <div className="cartitems-total-items">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitems-total-items">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-items">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <button onClick={makePayment}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
            <p>If you have a promocode, Enter it here.</p>
            <div className="cartitems-promobox">
                <input type="text" placeholder='PROMO CODE' />
                <button>Submit</button>
            </div>
        </div>
       </div>
    </div>
    
  )
}

export default CartItems