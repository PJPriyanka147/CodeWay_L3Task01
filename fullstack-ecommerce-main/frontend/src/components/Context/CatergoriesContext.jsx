import React, { createContext } from "react";
import all_product from "../../assets/all_product";
import { useState } from "react";

export const CategoriesContext = createContext(null);


const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++){
        cart[index] = 0;
    }   
    return cart;    
}

const CategoriesContextProvider = (props) => {
    
    const [cartItems, setcartItems] = useState(getDefaultCart());
    

    const addToCart = (itemId) => {
       setcartItems((prev)=>({...prev, [itemId]:prev[itemId]+1}));

    }

    const removeFromCart = (itemId) => {
        setcartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}))
     }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo = all_product.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.new_price * cartItems[item];
            }
           
        } 
        return totalAmount;   
       
    }

    const getTotalCartItems = () =>{
        let totalItem = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                totalItem+= cartItems[item];
            }
        }
        return totalItem;
    }

    const getCartItemsArray = () => {
        const cartItemsArray = [];
        for (const itemId in cartItems) {
            if (cartItems[itemId] > 0) {
                const itemInfo = all_product.find((product) => product.id === Number(itemId));
                cartItemsArray.push({
                    id: itemInfo.id,
                    quantity: cartItems[itemId],
                    name: itemInfo.name,
                    price:itemInfo.new_price
                    // Add other properties as needed
                });
            }
        }
        return cartItemsArray;
    }
  

     const ContextValue = {getTotalCartItems, cartItems: getCartItemsArray(), getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart};

    return(
        <CategoriesContext.Provider value={ContextValue}>
            {props.children}
            </CategoriesContext.Provider>
    )
}
export default CategoriesContextProvider