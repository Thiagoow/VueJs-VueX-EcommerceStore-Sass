// Get all products from API & insert on VueX state:
export const GET_PRODUCTS = (state, products) => {
  state.products = products;
};

/* Get a specific product from API and
 insert on VueX singleProduct state: */
export const GET_PRODUCT = (state, singleProduct) => {
  state.singleProduct = singleProduct;
};

// Add Product to cart API route & VueX state:
export const ADD_TO_CART = (state, { product, quantity }) => {
  // Check if product already exists in cart:
  let productInCart = state.cart.find((item) => {
    return item.product.id === product.id;
  });
  //If already has one:
  if (productInCart) {
    productInCart.quantity += quantity;
    return;
  }
  //Else, push the product:
  state.cart.push({
    product,
    quantity
  });
};

// Add Product to favorites API route & VueX state:
export const ADD_TO_FAVORITE = (state, { product }) => {
  const alreadyOnFavorite = state.favorites.find((item) => {
    return item.product.id === product.id;
  });
  //Keep on state only the items that weren't on favorites before:
  state.favorites = state.favorites.filter((item) => {
    return item.product.id !== product.id;
  });

  if (!alreadyOnFavorite) {
    state.favorites.push({
      product
    });
  }
};

// Get all items in cart route & insert on VueX state:
export const GET_CART = (state, cart) => {
  state.cart = cart;
};

// Get all items in favorites route & insert on VueX state:
export const GET_FAVORITES = (state, favorites) => {
  state.favorites = favorites;
};

// Remove from cart in state & API:
export const REMOVE_CART = (state, singleProduct) => {
  state.cart.splice(singleProduct, 1);
};

// Remove from favorite on state & API:
export const REMOVE_FAVORITE = (state, singleProduct) => {
  state.favorites.splice(singleProduct, 1);
};

// Clear/remove all products from cart state & API:
export const CLEAR_CART = (state) => {
  state.cart = [];
};
// Clear/remove all products from favorites state & API:
export const CLEAR_FAVORITES = (state) => {
  state.favorites = [];
};
