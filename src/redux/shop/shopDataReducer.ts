import { SHOP_TYPES } from '../types';

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  error:''
}

const ShopDataReducer = (state = INITIAL_STATE, action: any) => {
  switch(action.type){
    case SHOP_TYPES.FETCH_COLLECTION_START:
      return {
        ...state,
        isFetching: true
      }
    
    case SHOP_TYPES.FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        collections: action.payload,
        isFetching: false
      }
    case SHOP_TYPES.FETCH_COLLECTION_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    default:
      return state;
  }
}

export default ShopDataReducer;