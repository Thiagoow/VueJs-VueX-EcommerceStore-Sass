<template>
  <main>
    <section class="productsContainer">
      <ProductCard
        v-for="i in cart"
        :product="i.product"
        :key="i.product.id"
        :id="i.product.id"
        :name="i.product.name"
        :imgUrl="i.product.imgUrl"
        :price="i.product.price"
        :quantity="i.product.quantity"
        :description="i.product.description"
      />
    </section>
  </main>
</template>

<script>
import ProductCard from '../components/ProductCard.vue';
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  components: {
    ProductCard
  },
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['cartItemCount', 'cartTotalPrice'])
  },
  mounted() {
    /* When app is initialized, get 
    all items from cart API route: */
    this.getCartItems();
  },
  methods: {
    ...mapActions(['getCartItems', 'removeCart', 'clearCart'])
  }
};
</script>

<style lang="scss" scoped>
@use '../assets/scss/abstracts/variables' as *;

.productsContainer {
  padding: 2rem;
  display: flex;
  background-color: $body-color;
  flex-direction: column;
}
</style>
