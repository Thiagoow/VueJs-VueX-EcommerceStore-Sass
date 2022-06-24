<template>
  <main>
    <section class="favoritesContainer">
      <FavoriteCard
        v-for="i in favorites"
        :product="i"
        :key="i.product.id"
        :id="i.product.id"
        :name="i.product.name"
        :imgUrl="i.product.imgUrl"
        :description="i.product.description"
      />

      <button
        class="button"
        @click.prevent="$event.stopPropagation(clearFavorites())"
      >
        Limpar favoritos
      </button>
    </section>
  </main>
</template>

<script>
import FavoriteCard from '../components/FavoriteCard.vue';
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  components: {
    FavoriteCard
  },
  computed: {
    ...mapState(['favorites']),
    ...mapGetters(['favoritesItemCount'])
  },
  mounted() {
    this.getFavoriteItems(this.favorites);
    /* ❗ IF USING localActions:
    Add this.favorites inside of () */
  },
  methods: {
    ...mapActions(['getFavoriteItems', 'clearFavorites']),
    clearAPIFavorites() {
      const IDsArray = productsArray.map((product) => product.id);
      this.clearFavorites(IDsArray);
      /* ❗ IF USING localActions:
      Remove this function & use clearFavorites */
    }
  }
};
</script>

<style lang="scss" scoped>
@use '../assets/scss/abstracts/variables' as *;

.favoritesContainer {
  padding: 2rem;
  display: flex;
  background-color: $body-color;
  flex-direction: column;
}

.button {
  margin-top: 1rem;
  align-self: center;

  @media screen and (max-width: 424px) {
    margin-top: 1.5rem;
    align-self: center;
  }
  @media screen and (max-width: 612px) {
    margin-top: 2rem;
  }
  @media screen and (min-width: 768px) {
    margin-top: 3rem;
  }
}
</style>
