import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
  const [cart,setCart]=useState([]);
  const first10=fakeData.slice(0,10);
  const [products,setProducts]=useState(first10);
    useEffect(()=>{
      const saveCart=getDatabaseCart();
      const productKeys=Object.keys(saveCart);

      const prevousProduct=productKeys.map(existingKey=>{
         const product=fakeData.find(pd=>pd.key===existingKey);
         product.quantity=saveCart[existingKey];
         return product;
      })
     setCart(prevousProduct);
    },[])
    const prouctAddHandler=(product)=> {
      let count=1;
      const toBeAddedKey=product.key;
      const sameProduct=cart.find(pd=>pd.key===toBeAddedKey);
      let newCart;
      if(sameProduct){
        count=sameProduct.quantity+1;
        sameProduct.quantity=count;

        const others=cart.filter(pd=>pd.key!==toBeAddedKey);
        newCart=[...others,sameProduct];   
      }
      else{
        product.quantity=1;
        newCart=[...cart,product];
      }
        setCart(newCart);
        addToDatabaseCart(product.key,count);
    }

    return (
        <div className="twin-container">
          <div className="product-container">
          <ul>
                {
                    products.map(pd=> <Product singleProduct={pd} addShowCart={true} key={pd.key} productAddHandler={prouctAddHandler}></Product> )
                }
            </ul>
          </div>
          <div className="card-container">
            <Cart cart={cart}>
            <Link to="/orderReview"> 
            <button className="main-button">Order Review</button>
            </Link>
            </Cart>
          </div>
        </div>
    );
};

export default Shop;