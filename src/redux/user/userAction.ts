import { USER_TYPES } from '../types';

const setCurrentUserAction = (user: any) => ({
  type: USER_TYPES.SET_CURRENT_USER,
  payload: user
})


export default setCurrentUserAction;