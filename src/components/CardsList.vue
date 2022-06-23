<template>
  <div class="cardContainer grid">
    <HomeCard
      v-for="i in products"
      :product="i"
      :key="i.id"
      :id="i.id"
      :name="i.name"
      :imgUrl="i.posterUrl"
      :price="i.price"
      :quantity="1"
      :description="i.description"
    />
  </div>
</template>

<script>
import HomeCard from './HomeCard.vue';
import { mapState, mapActions } from 'vuex';

export default {
  components: {
    HomeCard
  },
  computed: {
    ...mapState(['products'])
  },
  mounted() {
    this.getProducts(this.products);
    /* ❗ IF USING localActions:
    Add this.products inside of () */
  },
  methods: {
    ...mapActions([
      'getProducts',
      'clearCart',
      'clearProducts',
      'clearFavorites'
    ])
  }
};
</script>

<style lang="scss" scoped>
@use '../assets/scss/abstracts/variables' as *;
.cardContainer {
  justify-content: center;
  grid-template-columns: repeat(2, 250px);
  gap: 3rem;

  @media screen and (max-width: 590px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 416px) {
    grid-template-columns: 240px;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 200px);
    gap: 3rem;
  }
  @media screen and (min-width: 1140px) {
    grid-template-columns: repeat(4, 200px);
    gap: 4rem;
  }
}
</style>
