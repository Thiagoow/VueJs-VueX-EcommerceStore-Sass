import Cart from '../api/Cart';
import Products from '../api/Products';
import Favorites from '../api/Favorites';

// Get all products from API
export const getProducts = ({ commit }) => {
  Products.all().then((response) => {
    commit('GET_PRODUCTS', response.data);
  });
};

// Generate products locally to VueX state:
export const addLocalProducts = ({ commit }) => {
  commit('ADD_LOCAL_PRODUCTS');
};

// Get a product by his id
export const getProduct = ({ commit }, productId) => {
  Products.show(productId).then((response) => {
    commit('GET_PRODUCT', response.data);
  });
};

// Add a product to cart array
export const addCart = ({ commit }, { product, quantity }) => {
  commit('ADD_TO_CART', { product, quantity }); //👈🏽 Add to VueX state
  Cart.store({
    product,
    quantity
    //☝🏽 Add to cart route on API
  });
};

// Add a product to favorites array
export const addFavorite = ({ commit }, { product }) => {
  commit('ADD_TO_FAVORITE', { product });
  Favorites.store({
    product
  });
};

// Get all products in cart route
export const getCartItems = ({ commit }) => {
  Cart.all().then((response) => {
    commit('GET_CART', response.data);
  });
};

// Get all products in favorites route
export const getFavoriteItems = ({ commit }) => {
  Favorites.all().then((response) => {
    commit('GET_FAVORITES', response.data);
  });
};

// Delete a single product from cart
export const removeCart = ({ commit }, product) => {
  commit('REMOVE_CART', product); //👈🏽 Delete from VueX state
  //Delete by his ID in cart route:
  Cart.delete(product.id);
};

// Delete a single product from favorites
export const removeFavorite = ({ commit }, product) => {
  commit('REMOVE_FAVORITE', product);
  Favorites.delete(product.id);
};

// Delete all products from cart array
export const clearCart = ({ commit }) => {
  // Clear all items from cart VueX state:
  commit('CLEAR_CART');
  // Clear all from cart API route:
  Cart.deleteAll();
};

// Delete all products from favorites array
export const clearFavorites = ({ commit }) => {
  commit('CLEAR_FAVORITES');
  Favorites.deleteAll();
};

export const clearProducts = ({ commit }) => {
  commit('CLEAR_PRODUCTS');
  Products.deleteAll();
};
