<template>
  <main>
    <section class="productsContainer">
      <ProductCard
        v-for="i in cart"
        :product="i"
        :key="i.product.id"
        :id="i.product.id"
        :name="i.product.name"
        :imgUrl="i.product.backdropUrl"
        :price="i.product.price"
        :quantity="1"
        :description="i.product.description"
      />

      <div class="totalCartPrice">
        <span class="price">
          Total: <b>{{ totalPriceInBRL() }}</b>
        </span>

        <button
          class="button"
          @click.prevent="$event.stopPropagation(clearCart())"
        >
          Limpar carrinho
        </button>
      </div>
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
    ...mapGetters(['cartTotalPrice'])
  },
  mounted() {
    this.getCartItems(this.cart);
    /* ❗ IF USING localActions:
    Add this.cart inside of () */
  },
  methods: {
    ...mapActions(['getCartItems', 'clearCart']),
    totalPriceInBRL() {
      let totalPrice = this.cartTotalPrice;

      return totalPrice.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
      });
    }
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

.totalCartPrice {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 1rem;

  @media screen and (max-width: 424px) {
    flex-direction: column;

    .button {
      width: 80%;
      margin-top: 1.5rem;
      align-self: center;
    }
  }
  @media screen and (min-width: 643px) {
    margin-top: 2rem;
  }
  @media screen and (min-width: 768px) {
    margin-right: auto;
    margin-left: auto;
    .price b {
      margin-right: 21rem;
    }
  }

  .price {
    font-size: $h2-font-size;
    align-self: center;
    color: $txt-color;

    font-weight: $wgt-semi-bold;
    margin: 1rem 0 0 1rem;

    b {
      font-weight: $wgt-semi-bold;
      color: $third-color;
    }
  }
}
</style>
