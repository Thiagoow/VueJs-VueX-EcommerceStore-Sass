// Insert on VueX state all products from API:
export const GET_PRODUCTS = (state, products) => {
  state.products = products;
};

// Get a specific product from API and insert on VueX state:
export const GET_PRODUCT = (state, product) => {
  state.singleProduct = product;
};

// Add Product to cart VueX state:
export const ADD_TO_CART = (state, { product, quantity }) => {
  // Check if product already exists in cart:
  let productInCart = state.cart.find((item) => {
    return item.singleProduct.id === product.id;
  });
  //If already has one:
  if (productInCart) {
    productInCart.quantity += quantity;
    return;
  }
  //Else, push the product to VueX state:
  state.cart.push({
    singleProduct,
    quantity
  });
};

// Add Product to favorites VueX state:
export const ADD_TO_FAVORITE = (state, { product, quantity }) => {
  let productInFavorite = state.favorites.find((item) => {
    return item.singleProduct.id === product.id;
  });
  if (productInFavorite) {
    /*====TODO: REMOVE FROM FAVORITES❗❗ 
    productInFavorite.quantity += quantity; */
    return;
  }
  state.favorites.push({
    singleProduct,
    quantity
  });
};

// Get all items in cart route
export const GET_CART = (state, cart) => {
  state.cart = cart;
};

// Get all items in favorites route
export const GET_FAVORITES = (state, favorites) => {
  state.favorites = favorites;
};

//============TODO: & API? 🤔

// Remove from cart in state & API
export const REMOVE_CART = (state, singleProduct) => {
  /* state.cart = state.cart.filter((item) => {
    return item.singleProduct.id !== singleProduct.id;
  }); */

  state.cart.splice(singleProduct, 1);
};

// Remove from favorite on state & API
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
