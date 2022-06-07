import Cart from '../api/Cart';
import Products from '../api/Products';
import Favorites from '../api/Favorites';

// Get all products from API
export const getProducts = ({ commit }) => {
  Products.all().then((res) => {
    commit('GET_PRODUCTS', res.data);
  });
};

// Get a product by his id
export const getProduct = ({ commit }, productId) => {
  Products.show(productId).then((res) => {
    commit('GET_PRODUCT', res.data);
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
  Cart.store({
    product
  });
};

// Get all products in cart route
export const getCartItems = ({ commit }) => {
  Cart.all().then((res) => {
    commit('GET_CART', res.data);
  });
};

// Get all products in favorites route
export const getFavoriteItems = ({ commit }) => {
  Favorites.all().then((res) => {
    commit('GET_FAVORITES', res.data);
  });
};

// Delete a single product from cart
export const removeCart = ({ commit }, id) => {
  commit('REMOVE_CART', id); //👈🏽 Delete from VueX state
  //Delete by his ID in cart route:
  Cart.delete(id);
  //☝🏽 Or it could be product.id
};

// Delete a single product from favorites
export const removeFavorite = ({ commit }, id) => {
  commit('REMOVE_FAVORITE', id);
  Cart.delete(id);
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
  Cart.deleteAll();
};
