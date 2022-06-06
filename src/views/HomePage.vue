<template>
  <main>
    <section class="container">
      <SectionTitle title="Catálogo de Produtos" />

      <CardsList />
    </section>
  </main>
</template>

<script>
import SectionTitle from '../components/SectionTitle.vue';
import CardsList from '../components/CardsList.vue';

export default {
  components: {
    SectionTitle,
    CardsList
  }
};
</script>
