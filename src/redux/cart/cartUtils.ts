export const addToCart = (cartItems: any, addToCartItem: any) => {

  const checkExistingItem = cartItems.find((cartItem: any) => cartItem.id === addToCartItem.id);
  
  if (checkExistingItem) {
    return cartItems.map((cartItem: any) => cartItem.id === addToCartItem.id ?
    { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    )
  }
  return [...cartItems, {...addToCartItem, quantity: 1} ]
}

export const removeCartItem = (cartItems: any, cartItemToRemove: any) => {
  const existingCartItem = cartItems.find((cartItem: any) => cartItem.id === cartItemToRemove.id);
  
  if(existingCartItem.quantity === 1 ){
    return cartItems.filter((cartItem: any) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem: any) => cartItem.id === cartItemToRemove.id ? {
    ...cartItem, quantity: cartItem.quantity - 1 } : cartItem )

}