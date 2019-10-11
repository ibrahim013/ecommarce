import React from 'react';
import { connect } from  'react-redux';

import CustomButton from '../custom-button/customButtonComponent';

import './cartDropdownStyle.scss';
import CartItems from '../cart-items/cartItemsComponent';
import { selectCartItems } from '../../redux/cart/cartSelector';

const CartDropdown: React.FC<any> = ({cartItem}) => (
  <div className='cart-dropdown'>
    {
      cartItem.map((item: any) => <CartItems items={item} key={item.id}/>)
    }
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)

const mapStateToProps = (state: any) => ({
  cartItem: selectCartItems(state)
})
export default connect(mapStateToProps, null)(CartDropdown);