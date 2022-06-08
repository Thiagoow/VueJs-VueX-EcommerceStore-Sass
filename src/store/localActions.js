// Get local products from VueX state:
export const getLocalProducts = ({ commit }, localProducts) => {
  commit('GET_LOCAL_PRODUCTS', localProducts);
};

// Get a product by his id
export const getProduct = ({ commit }, productId) => {
  commit('GET_PRODUCT', productId);
};

// Generate products to VueX state:
export const addLocalProducts = ({ commit }, productsArray) => {
  commit('ADD_LOCAL_PRODUCTS', productsArray);
};

// Add a product to cart array
export const addCart = ({ commit }, { product, quantity }) => {
  commit('ADD_TO_CART', { product, quantity }); //👈🏽 Add to VueX state
};

// Add a product to favorites array
export const addFavorite = ({ commit }, { product }) => {
  commit('ADD_TO_FAVORITE', { product });
};

// Get all products in cart route
export const getCartItems = ({ commit }) => {
  /*Cart.all().then((response) => {
    commit('GET_CART', response.data);
  });*/
};

// Get all products in favorites route
export const getFavoriteItems = ({ commit }) => {
  /*Favorites.all().then((response) => {
    commit('GET_FAVORITES', response.data);
  });*/
};

// Delete a single product from cart
export const removeCart = ({ commit }, product) => {
  commit('REMOVE_CART', product);
};

// Delete a single product from favorites
export const removeFavorite = ({ commit }, product) => {
  commit('REMOVE_FAVORITE', product);
};

// Delete all products from cart array
export const clearCart = ({ commit }) => {
  commit('CLEAR_CART');
};

// Delete all products from favorites array
export const clearFavorites = ({ commit }) => {
  commit('CLEAR_FAVORITES');
};

// Delete all products from products array
export const clearProducts = ({ commit }) => {
  commit('CLEAR_PRODUCTS');
};
