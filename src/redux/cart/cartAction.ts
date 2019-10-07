import CART_TYPES from "./cartType";

const toggleCartHidden = () => ({
  type: CART_TYPES.TOGGLE_CART_HIDDEN
})

export const addItem = (items: any) => ({
  type: CART_TYPES.ADD_ITEMS,
  payload: items
})

export default toggleCartHidden;