import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif';


const OrderReview = () => {
    const [order,setOrder]=useState(false);
     const handlePlaceHolder=()=>{
         setCart([]);
         processOrder();
         setOrder(true);
       //  console.log("clicked me");
     }
     
     let thankYou;
     if(order)
     {
        thankYou=<img src={happyImage} alt=""/>
     }
     
    const removeHandle=(productKey)=>{
      //  console.log("remove cliked",productKey);
       const newCart= cart.filter(pd=>pd.key!==productKey);
       setCart(newCart);
       removeFromDatabaseCart(productKey);
    }
    const [cart, setCart] = useState([]);

   useEffect(()=>{
    const saveCart = getDatabaseCart();
    const productKey = Object.keys(saveCart);
    const cartProduct = productKey.map(key => {
        const product = fakeData.find(pd => pd.key === key);
        product.quantity = saveCart[key];
        return product;

   });
   setCart(cartProduct);
},[])
    return (
        <div className="twin-container">
         
           <div className="product-container">
           {
               cart.map(pd=><ReviewItem product={pd} key={pd.key} removeHandler={removeHandle}></ReviewItem>)
           }
             {thankYou}
           </div>
          
          <div className="card-container">
              <Cart cart={cart}>
                  <button onClick={handlePlaceHolder} className="main-button">Place order</button>
              </Cart>
          </div>
        </div>
    );
};

export default OrderReview;