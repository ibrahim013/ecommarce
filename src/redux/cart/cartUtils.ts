export const addToCart = (cartItems: any, addToCartItem: any) => {

  const checkExistingItem = cartItems.find((cartItem: any) => cartItem.id === addToCartItem.id);
  
  if (checkExistingItem) {
    return cartItems.map((cartItem: any) => cartItem.id === addToCartItem.id ?
    { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    )
  }
  return [...cartItems, {...addToCartItem, quantity: 1} ]
}
