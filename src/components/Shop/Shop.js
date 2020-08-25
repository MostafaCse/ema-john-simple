import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const prouctAddHandler=(pd)=> {
        let newCart=[...cart,pd];
        setCart(newCart);
   console.log(pd);
    }
    const [cart,setCart]=useState([]);
    const first10=fakeData.slice(0,10);
    const [products,setProducts]=useState(first10);
    return (
        <div className="shop-container">
          <div className="product-container">
          <ul>
                {
                    products.map(pd=> <Product singleProduct={pd} productAddHandler={prouctAddHandler}></Product> )
                }
            </ul>
          </div>
          <div className="card-container">
            <Cart cart={cart}></Cart>
          </div>
        </div>
    );
};

export default Shop;