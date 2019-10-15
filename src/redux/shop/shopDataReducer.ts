import { collections } from '../../Fixtures';

const INITIAL_STATE = {
  collections
}

const ShopDataReducer = (state = INITIAL_STATE, action: any) => {
  switch(action.type){
    default:
      return state;
  }
}

export default ShopDataReducer;