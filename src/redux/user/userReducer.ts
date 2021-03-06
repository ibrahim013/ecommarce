import { USER_TYPES } from '../types';

const INITIAL_STATE = {
  currentUser: null
}
const userReducer = (state=INITIAL_STATE, action:any) => {
  switch(action.type){
    case USER_TYPES.SET_CURRENT_USER:
      return{
        ...state,
        currentUser: action.payload
      }
    default:
      return{
        ...state
      }
  }
}
export default userReducer;