import { combineReducers } from 'redux';
import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';

 
const rootReducer = combineReducers({
  user: userReducer,
  toggleCartHidden: cartReducer
})

export default rootReducer;