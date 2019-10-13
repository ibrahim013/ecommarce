import { createSelector } from 'reselect';

const selectCart = (state: any) => state.cart;

export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems );

export const selectCartItemCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((accumulatedQuantity: any, cartItem: any) => accumulatedQuantity + cartItem.quantity, 0)
); 

export const selectCartHidden = createSelector([selectCart], (cart) => cart.hidden);

export const selectCartTotal = createSelector([selectCartItems],
  (cartItems) => cartItems.reduce((accPrice: any,  cartItem: any) => accPrice + (cartItem.price * cartItem.quantity), 0 ));