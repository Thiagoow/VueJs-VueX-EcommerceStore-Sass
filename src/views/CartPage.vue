<template>
  <main>
    <section class="productsContainer">
      <ProductCard
        name="Fulano Ciclano"
        imgUrl="https://picsum.photos/seed/nomeProduto/536/354"
        price="R$ 15,00"
        description="Fulano Ciclano random description. Lorem ipsum dolor."
      />
    </section>
  </main>
</template>

<script>
import ProductCard from '../components/ProductCard.vue';

export default {
  components: {
    ProductCard
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
