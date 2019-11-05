import { SHOP_TYPES } from '../types';

const INITIAL_STATE = {
  collections: null
}

const ShopDataReducer = (state = INITIAL_STATE, action: any) => {
  switch(action.type){
    case SHOP_TYPES.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      }
    default:
      return state;
  }
}

export default ShopDataReducer;