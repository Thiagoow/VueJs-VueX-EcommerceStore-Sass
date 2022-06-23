<template>
  <article class="card">
    <div class="cardOverlay" @click="toggleModal()">
      <button class="button">Descrição</button>
    </div>

    <img :src="imgUrl" alt="random image" class="img" />
    <button class="favoriteBtn" @click="addToFavorite()">
      <Icon :icon="isFilled ? 'mdi:cards-heart' : 'mdi:cards-heart-outline'" />
    </button>

    <h3 class="price">{{ ConvertToReal }}</h3>
    <span class="title">{{ name }}</span>

    <button class="button cartBtn" @click="addToCart()">
      <Icon icon="mdi:cart-outline" />
    </button>

    <div v-if="modalOpen" class="modal">
      <div class="content">
        <button
          @click="toggleModal()"
          title="Fechar modal"
          class="closeModalBtn"
        >
          <Icon icon="mdi:window-close" />
        </button>

        <span class="title">Descrição:</span>
        <p class="txt">
          {{ description }}
        </p>
      </div>
    </div>
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
    name: {
      type: String,
      required: true
    },
    imgUrl: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    quantity: {
      type: Number,
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
  data() {
    const priceInBrl = this.price;
    return {
      priceInBrl,
      isFilled: false,
      modalOpen: false
    };
  },
  computed: {
    ConvertToReal() {
      return this.priceInBrl.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
      });
    }
  },
  methods: {
    ...mapActions(['addCart', 'addFavorite']),
    toggleModal() {
      this.modalOpen = !this.modalOpen;
    },
    addToCart() {
      this.addCart({
        product: this.product,
        quantity: this.quantity
      });
    },
    fillFavoriteIcon() {
      this.isFilled = !this.isFilled;
    },
    addToFavorite() {
      //Because running locally:
      this.fillFavoriteIcon();

      this.addFavorite({
        product: this.product
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@use '../assets/scss/abstracts/variables' as *;

.cardOverlay {
  position: absolute;
  left: 0;
  bottom: -100%;
  width: 100%;
  height: 100%;
  border-radius: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $shadow-color;
  transition: 0.3s;
}

.card {
  display: grid;
  position: relative;
  background-color: $container-color;
  box-shadow: 0 4px 16px $shadow-color;
  padding: 1.5rem 1rem 1rem;
  border-radius: 0.75rem;
  overflow: hidden;

  &:hover .cardOverlay {
    bottom: 0;
  }
}
.img {
  width: 100%;
  cursor: pointer;
  max-width: 260px;
  justify-self: center;
  margin-bottom: $mg-0-75;
  transition: 0.3s;
}

.favoriteBtn {
  font-size: $h1-font-size;
  color: #f34747;
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  cursor: pointer;
  height: 2rem;
  padding: 0.2rem;
  border-radius: 50%;
  background-color: $container-color;

  &:hover {
    background-color: darken($container-color, 10%);
  }
}

.price {
  font-size: $normal-font-size;
}
.title {
  font-size: $small-font-size;
  margin-bottom: $mg-0-5;
}

@media screen and (min-width: 992px) {
  .card {
    padding: 2rem 1.5rem 1.5rem;
  }
  .title {
    font-size: $small-font-size;
  }

  .price {
    font-size: $h3-font-size;
  }

  .favoriteBtn {
    height: 1.8rem;
    font-size: $h2-font-size;
  }
}

/* MODAL */
.modal {
  position: fixed;
  inset: 0;
  z-index: $z-modal;
  opacity: 1;
  visibility: visible;
  transition: all 0.3s;
  background-color: $shadow-color;
}

.modal .content {
  width: 25rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem;
  background: $container-color;
  border-radius: 0.7rem;
}
.modal .title {
  font-size: $h2-font-size;
  color: $title-color;
  font-weight: bold;
}
.modal .txt {
  font-size: $normal-font-size;
  width: 100%;
  color: $txt-color;
  margin-top: $mg-1;
}
.closeModalBtn {
  color: #f34747;
  font-size: 2.4rem;
  position: absolute;
  right: 0;
  top: 0.6rem;
  width: 70px;
  text-align: center;
  background: transparent;
}
.closeModalBtn:hover {
  color: red;
}

@media screen and (max-width: 470px) {
  .modal .content {
    width: 20rem;
  }
}

@media screen and (max-width: 400px) {
  .modal .content {
    width: 15rem;
  }
}
</style>
