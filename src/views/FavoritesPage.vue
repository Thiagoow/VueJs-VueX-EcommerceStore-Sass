<template>
  <main>
    <section class="favoritesContainer">
      <FavoriteCard
        name="Fulano Ciclano"
        imgUrl="https://picsum.photos/seed/nomeProduto/536/354"
        description="Fulano Ciclano random description. Lorem ipsum dolor."
      />
    </section>
  </main>
</template>

<script>
import FavoriteCard from '../components/FavoriteCard.vue';

export default {
  components: {
    FavoriteCard
  }
};
</script>

<style lang="scss" scoped>
@use '../assets/scss/abstracts/variables' as *;

.favoritesContainer {
  padding: 2rem;
  display: flex;
  background-color: $body-color;
}
</style>
