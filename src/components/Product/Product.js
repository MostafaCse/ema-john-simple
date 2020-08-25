import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
  //  console.log(props.singleProduct.name);
  const {name,img,seller,price,stock}=props.singleProduct;
    return (
        <div className="product">
             <div>
                  <img src={img} alt=""/>
            </div>
            <div>
              <p id="name-highlight">{name}</p>
              <br/>
                    <p><small>by: {seller}</small></p>
                    <p>${price}</p>
                   <p><small>only {stock} left in stock - order soon</small></p>
                   <button className="main-button" onClick={()=>props.productAddHandler(props.singleProduct)}><FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>
            </div>
            

        </div>
    );
};

export default Product;