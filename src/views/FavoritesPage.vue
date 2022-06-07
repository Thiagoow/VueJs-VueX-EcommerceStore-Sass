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
    /* When app is initialized, get 
    all items from favorites API route: */
    this.getFavoriteItems();
  },
  methods: {
    ...mapActions(['getFavoriteItems', 'clearFavorites'])
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
</style>
