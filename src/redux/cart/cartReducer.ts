import  CART_TYPES  from './cartType';

const INITIAL_STATE = {
  hidden: true
}

const cartReducer = (state = INITIAL_STATE, action: any)  => {
  switch(action.type){
    case CART_TYPES.TOGGLE_CART_HIDDEN:
      return{
        ...state,
        hidden: !state.hidden
      }
    default:
      return{
        ...state
      }
  }
}

export default cartReducer;