<template>
  <Header />
  <router-view />
  <br /><br />
</template>

<script>
import Header from './components/Header.vue';

export default {
  components: {
    Header
  }
};
</script>
