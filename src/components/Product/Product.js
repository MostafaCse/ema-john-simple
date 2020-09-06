import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
  //  console.log(props.singleProduct.name);
  const {name,img,seller,price,stock,key}=props.singleProduct;
 // const {addShowCart}=props.addShowCart;
    return (
        <div className="product">
             <div>
                  <img src={img} alt=""/>
            </div>
            <div>
    <p id="name-highlight"><Link to={"/product/"+key}>{name}</Link></p>
              <br/>
                    <p><small>by: {seller}</small></p>
                    <p>${price}</p>
                   <p><small>only {stock} left in stock - order soon</small></p>
              
                 
                 
                 

                 { props.addShowCart &&   <button className="main-button"  onClick={()=>props.productAddHandler(props.singleProduct)}
                    >
                    <FontAwesomeIcon icon={faShoppingCart} />Add to cart
                    </button>
                  } 
            </div>
            

        </div>
    );
};

export default Product;