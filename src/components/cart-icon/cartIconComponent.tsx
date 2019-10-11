import  React  from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingcartIcon } from '../../asserts/shopping-bag.svg';

import toggleCartHiddenAction from '../../redux/cart/cartAction';

import './catIconStyle.scss';
import { selectCartItemCount } from '../../redux/cart/cartSelector';


const CartIcon: React.FC<any> = ({ toggleCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={itemCount &&toggleCartHidden}>
    <ShoppingcartIcon className='shopping-icon'/>
    <span className='item-count'>{itemCount}</span>
  </div>
)

const mapDispatchToProps = (dispatch: any) => ({
  toggleCartHidden: () => dispatch(toggleCartHiddenAction())
})

const mapStateToProps = (state: any) => ({
  itemCount: selectCartItemCount(state)
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

