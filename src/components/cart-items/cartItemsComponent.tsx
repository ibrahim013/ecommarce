import React from 'react';

import './cartItemStyle.scss';


interface items {
  imageUrl: string;
  quantity: number;
  price: number;
  id?: number;
  name: string;
}
interface Props {
  items: items
}

const CartItems: React.FC<Props> = ({ items:{ imageUrl, quantity, name, price }} ) => (
  <div className='cart-item'>
    <img src={ imageUrl }  alt='item'/>
    <div className='item-details'>
      <span className='name'>{ name }</span>
      <span className='price'>{ quantity } x ₦{ price }</span>
    </div>
  </div>
)

export default CartItems;