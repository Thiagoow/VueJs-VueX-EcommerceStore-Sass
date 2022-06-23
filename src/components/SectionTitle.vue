<template>
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
  margin-top: $mg-2-5 !important;
  font-size: $h2-font-size;
  color: $title-color;
  margin-bottom: $mg-1-5;
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

  @media screen and (max-width: 768px) {
    margin-top: $mg-1-5 !important;
  }
}
</style>
