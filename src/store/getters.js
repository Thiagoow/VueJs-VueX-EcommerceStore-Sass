//Get all items in cart from VueX state:
export const cartItemCount = (state) => {
  if (state.cart) {
    return state.cart.length;
  } else {
    return 0;
  }
};
//Get all items in favorites from VueX state:
export const favoritesItemCount = (state) => {
  if (state.favorites) {
    return state.favorites.length;
  } else {
    return 0;
  }
};

//Get total price from products on cart:
export const cartTotalPrice = (state) => {
  let total = 0;
  state.cart.forEach((item) => {
    total += item.product.price * item.quantity;
  });

  return total;
};
