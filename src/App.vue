<template>
  <main>
    <section class="container">
      <SectionTitle title="Catálogo de Produtos" />

      <div class="cardContainer grid">
        <Card />
      </div>
    </section>
  </main>
</template>

<script>
import SectionTitle from './components/SectionTitle.vue';
import Card from './components/Card.vue';

export default {
  name: 'App',
  components: {
    SectionTitle,
    Card
  }
};
</script>

<style lang="scss" scoped>
@use './assets/scss/abstracts/variables' as *;
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
