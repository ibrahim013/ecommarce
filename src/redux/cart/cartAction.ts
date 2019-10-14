import CART_TYPES from "./cartType";

export const toggleCartHidden = () => ({
  type: CART_TYPES.TOGGLE_CART_HIDDEN
})

export const addItem = (items: any) => ({
  type: CART_TYPES.ADD_ITEMS,
  payload: items
})

export const clearCartItem = (item: any) => ({
  type: CART_TYPES.CLEAR_ITEM_FROM_CART,
  payload: item
})

export const removeItem = (item: any) => ({
  type: CART_TYPES.REMOVE_CART_ITEM,
  payload: item
})