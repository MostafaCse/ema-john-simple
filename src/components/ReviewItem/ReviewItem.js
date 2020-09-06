import React from 'react';

const ReviewItem = (props) => {
    const {name,quantity,key,price}=props.product;
    const reviewItemStyle={
      borderBottom:'1px solid lightgrey',
      marginBottom:'5px',
      paddingBottom:'5px',
      marginLeft:'200px'
    }
    return (
        <div style={reviewItemStyle} className="review-item">
            <h1 className="name-highLight">{name}</h1>
    <p>Quantity:{quantity}</p>
    <p><small>${price}</small></p>
    <button onClick={()=>props.removeHandler(key)} className="main-button">Remove</button>
        </div>
    );
};

export default ReviewItem;