<template>
  <br />
  <br />
  <h2 class="sectionTitle">{{ title }}</h2>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@use '../assets/scss/abstracts/variables' as *;

.sectionTitle {
  position: relative;
  font-size: $h2-font-size;
  color: $title-color;
  margin-bottom: $mg-2-5;
  text-align: center;

  &:after {
    content: '';
    position: absolute;
    width: 56px;
    height: 0.18rem;
    top: -1rem;
    left: 0;
    right: 0;
    margin: auto;
    background-color: $title-color;
  }
}
</style>
