<template>
  <div class="btns">
    <button
      class="button deleteAll"
      @click.prevent="$event.stopPropagation(clearAllRoutes())"
    >
      Deletar TUDO
    </button>

    <button
      class="button createProducts"
      @click.prevent="$event.stopPropagation(insertOnVueX())"
    >
      Gerar produtos
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import axios from '../api/axios';
import productsArray from '../api/generateProducts';

const headers = {
  'Content-Type': 'text/plain; charset=utf-8',
  //CORS with my ProxyServer that enables it:
  'Access-Control-Allow-Origin':
    'https://cors-proxyserver-thiagoow.herokuapp.com/'
};

export default {
  methods: {
    ...mapActions([
      'addLocalProducts',
      'clearCart',
      'clearProducts',
      'clearFavorites'
    ]),
    clearAllRoutes() {
      this.clearProducts();
      this.clearCart();
      this.clearFavorites();
    },
    insertOnVueX() {
      this.addLocalProducts(productsArray);
    },
    insertOnAPI() {
      for (let i = 0; i < productsArray.length; i++) {
        axios
          .post('/products', productsArray[i], headers)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@use '../assets/scss/abstracts/variables' as *;

.btns {
  display: flex;
  justify-content: center;
  margin-bottom: $mg-1;
  margin-right: auto;
  margin-left: auto;

  @media screen and (max-width: 991px) {
    margin-bottom: $mg-2;
  }
  @media screen and (max-width: 339px) {
    width: 60%;
  }
  @media screen and (max-width: 457px) {
    flex-direction: column-reverse;
    width: 50%;

    .deleteAll {
      margin-right: 0 !important;
      margin-top: $mg-1;
    }

    .button {
      padding: 0.75rem 0;
    }
  }

  .deleteAll {
    justify-self: flex-end;
    background-color: $second-color;
    border: 1px solid $border-color;
    color: $body-color;
    margin-right: 3rem;

    &:hover {
      background-color: $alt-second-color;
    }

    @media screen and (max-width: 540px) {
      margin-right: 2rem;
    }
  }

  .button {
    @media screen and (max-width: 520px) {
      font-size: $tiny-font-size !important;
    }
  }
}
</style>
