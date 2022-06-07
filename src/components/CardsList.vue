<template>
  <div class="cardContainer grid">
    <HomeCard
      v-for="i in products"
      :product="i"
      :key="i.id"
      :id="i.id"
      :name="i.name"
      :imgUrl="i.imgUrl"
      :price="i.price"
      :quantity="i.quantity"
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
    /* When app is initialized, get 
    all items from products API route: */
    this.getProducts();
  },
  methods: {
    ...mapActions(['getProducts'])
  }
};
</script>

<style lang="scss" scoped>
@use '../assets/scss/abstracts/variables' as *;
.cardContainer {
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media screen and (max-width: 339px) {
    grid-template-columns: 150px;
    justify-content: center;
  }
  @media screen and (min-width: 767px) {
    grid-template-columns: repeat(3, 200px);
    justify-content: center;
    gap: 3rem;
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(4, 200px);
    gap: 2.5rem;
    padding-top: 2rem;
  }
}
</style>
