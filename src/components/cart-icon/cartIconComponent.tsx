import  React  from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingcartIcon } from '../../asserts/shopping-bag.svg';

import toggleCartHiddenAction from '../../redux/cart/cartAction';

import './catIconStyle.scss';


const CartIcon: React.FC<any> = ({ toggleCartHidden }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingcartIcon className='shopping-icon'/>
    <span className='item-count'>0</span>
  </div>
)

const mapDispatchToProps = (dispatch: any) => ({
  toggleCartHidden: () => dispatch(toggleCartHiddenAction())
})
export default connect(null, mapDispatchToProps)(CartIcon);

