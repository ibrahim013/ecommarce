import React from 'react';
import { connect } from  'react-redux';

import CustomButton from '../custom-button/customButtonComponent';

import './cartDropdownStyle.scss';
import CartItems from '../cart-items/cartItemsComponent';
import { selectCartItems } from '../../redux/cart/cartSelector';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router';
import { toggleCartHidden } from '../../redux/cart/cartAction';

const CartDropdown: React.FC<any> = ({cartItem, history, dispatch}) => (
  <div className='cart-dropdown'>
    {
      cartItem.length ?
      (cartItem.map((item: any) => <CartItems items={item} key={item.id}/>))
      : (<span className='empty-message'>Your cart items empty</span>)
    }
    <CustomButton onClick={() => {
      history.push('/checkout')
      dispatch(toggleCartHidden())
    }}>
      GO TO CHECKOUT
    </CustomButton>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItem: selectCartItems
})
export default withRouter(connect(mapStateToProps, null)(CartDropdown));