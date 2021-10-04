import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
  const {name, price, quantity, key} = props.product;
  const { handlerRemove} = props;
  return (
    <div className="product">
      <div>
        {/* <img src={img} alt="" /> */}
      </div>
      <div>
      <h4 className="product-name">{name}</h4>
      <p>Price: {price}</p>
      <p>Quantity: {quantity}</p>
      <button onClick={ () => handlerRemove(key)} className="btn-regular">Remove</button>
      </div>
    </div>
  );
};

export default ReviewItem;