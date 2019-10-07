import  CART_TYPES  from './cartType';
import { addToCart } from './cartUtils';


interface INITIAL_STATE {
  hidden: boolean;
  cartItems: object[];
}

const INITIAL_STATE: INITIAL_STATE = {
  hidden: true,
  cartItems: []

}
type Action = {type: 'TOGGLE_CART_HIDDEN', payload?: any} | {type: 'ADD_ITEMS', payload: []}

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
    default:
      return {
        ...state
      }
  }
}

export default cartReducer;