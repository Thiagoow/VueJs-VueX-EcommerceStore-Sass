<template>
  <div class="cardContainer grid">
    <HomeCard
      name="Fulano Ciclano"
      imgUrl="https://picsum.photos/seed/nomeProduto/536/354"
      price="R$ 15,00"
      description="Fulano Ciclano random description. Lorem ipsum dolor."
    />
  </div>
</template>

<script>
import HomeCard from './HomeCard.vue';

export default {
  components: {
    HomeCard
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
