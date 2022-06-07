<template>
  <article class="favoriteCard">
    <img class="favoriteImg" :src="imgUrl" alt="random image" />

    <div class="favoriteDetails">
      <span class="name">{{ name }}</span>
      <p class="description">
        {{ description }}
      </p>
    </div>

    <button
      class="favoriteBtn"
      @click.prevent="$event.stopPropagation(removeFavorite(product))"
    >
      <Icon icon="mdi:cards-heart" />
    </button>
  </article>
</template>

<script>
import { Icon } from '@iconify/vue';
import { mapActions } from 'vuex';

export default {
  props: {
    ['product']: {
      type: Object,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    imgUrl: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  components: {
    Icon
  },
  methods: {
    ...mapActions(['removeFavorite'])
  }
};
</script>

<style lang="scss" scoped>
@use '../assets/scss/abstracts/variables' as *;

.favoriteCard {
  position: relative;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  padding: 1rem;
  margin-top: $mg-1;
  margin-bottom: $mg-1-5;
  background-color: $container-color;
  box-shadow: 0 4px 14px $shadow-color;
  border-radius: $border-inside-radius;

  .favoriteImg {
    width: 25%;
    height: auto;
  }

  @media screen and (max-width: 612px) {
    .favoriteImg {
      display: none;
    }

    .favoriteDetails .description {
      width: 80%;
    }

    .favoriteBtn {
      padding-right: 0;
    }
  }
  @media screen and (min-width: 768px) {
    margin-top: $mg-2-5;
    margin-bottom: $mg-0-5;
    max-width: 664px;
    max-height: 134px;
    margin-left: auto;
    margin-right: auto;
  }
}

.favoriteDetails {
  align-self: center;
  margin-left: $mg-1;

  .name {
    font-weight: $wgt-semi-bold;
  }

  .description {
    margin-top: $mg-0-5;
    width: 90%;
  }
}

.favoriteBtn {
  background: transparent;
  font-size: $mg-1-75;
  display: flex;
  align-self: center;
  color: $second-color;
  padding: 0 1rem 1rem 0;

  &:hover {
    color: $alt-second-color;
  }
}
</style>
