import  CART_TYPES  from './cartType';
import { addToCart, removeCartItem } from './cartUtils';


interface INITIAL_STATE {
  hidden: boolean;
  cartItems: any[];
}

const INITIAL_STATE: INITIAL_STATE = {
  hidden: true,
  cartItems: []

}
type Action = {type: 'TOGGLE_CART_HIDDEN', payload?: any} | {type: 'ADD_ITEMS', payload: []} | 
{type: 'CLEAR_ITEM_FROM_CART', payload: []} 

const cartReducer = (state= INITIAL_STATE, action: Action)  => {
  switch(action.type){
    case CART_TYPES.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    case CART_TYPES.ADD_ITEMS:
      return {
        ...state,
        cartItems: addToCart(state.cartItems, action.payload)
      }
    case CART_TYPES.REMOVE_CART_ITEM: 
      return {
        ...state,
        cartItems: removeCartItem(state.cartItems, action.payload)
      }
    case CART_TYPES.CLEAR_ITEM_FROM_CART: 
      return {
        ...state,
        cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
      }
    default:
      return {
        ...state
      }
  }
}

export default cartReducer;