import React from 'react';
import { connect } from 'react-redux';


import { clearCartItem, addItem } from '../../redux/cart/cartAction';

import './checkoutItemStyle.scss';
import { removeItem } from '../../redux/cart/cartAction';


const CheckoutItem: React.FC<any> = ({ cartItem, clearItem, removeItem, addItem }) => {

  const { imageUrl, name, quantity, price } = cartItem;

  return(
    <div className='checkout-item'>
      <div className='image-container'>
        <img  src={imageUrl} alt='item'/>
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeItem(cartItem)}> &#10094;</div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}> &#10095;</div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={ () => clearItem(cartItem) }>&#10005;</div>
    </div>
  )
};

const mapDispatchToProps = (dispatch: any) => ({
  clearItem: (item: any) => dispatch(clearCartItem(item)),
  removeItem: (item: any) => dispatch(removeItem(item)),
  addItem: (item: any) => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);