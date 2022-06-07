//Get all items in cart from VueX state:
export const cartItemCount = (state) => {
  return state.cart.length;
};
//Get all items in favorites from VueX state:
export const favoritesItemCount = (state) => {
  return state.favorites.length;
};

//Get total price from products on cart:
export const cartTotalPrice = (state) => {
  let total = 0;
  state.cart.forEach((item) => {
    total += item.product.price * item.quantity;
  });

  return total;
};
