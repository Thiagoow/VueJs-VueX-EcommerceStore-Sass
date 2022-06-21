<template>
  <main>
    <section class="container">
      <SectionTitle title="Catálogo de Produtos" />

      <AppStateBtns />
      <CardsList />
    </section>
  </main>
</template>

<script>
import SectionTitle from '../components/SectionTitle.vue';
import CardsList from '../components/CardsList.vue';
import AppStateBtns from '../components/AppStateBtns.vue';

export default {
  components: {
    SectionTitle,
    CardsList,
    AppStateBtns
  }
};
</script>
