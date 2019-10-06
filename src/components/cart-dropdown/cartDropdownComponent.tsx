import React from 'react';

import CustomButton from '../custom-button/customButtonComponent';

import './cartDropdownStyle.scss';

const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-item'></div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)

export default CartDropdown;