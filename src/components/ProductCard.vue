<template>
  <article class="productCard">
    <img class="productImg" :src="imgUrl" alt="random image" />

    <div class="productDetails">
      <span class="name">
        {{ name }}
        <b>~ {{ calcProductPrice }}</b>
      </span>

      <p class="price">{{ calcProductPrice }}</p>
      <p class="description">
        {{ description }}
      </p>
    </div>

    <div class="moreMinusBtns">
      <button
        class="increaseBtn btns"
        @click.prevent="$event.stopPropagation(increaseQuantity())"
      >
        <Icon icon="mdi:plus" />
      </button>

      <button class="decreaseBtn btns" @click="decreaseQuantity()">
        <Icon icon="mdi:minus" />
      </button>
    </div>

    <button
      class="removeBtn btns"
      @click.prevent="$event.stopPropagation(removeCart(product))"
    >
      <Icon icon="mdi:selection-ellipse-remove" />
    </button>

    <p class="quantityLabel">{{ product.quantity }}x</p>
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
    let pQuantity = this.quantity;
    let pPrice = Math.abs(this.price);
    //☝🏽 Math.abs() -> Convert number to positive
    return {
      pPrice,
      pQuantity
    };
  },
  computed: {
    calcProductPrice() {
      let totalPrice = this.pPrice * this.pQuantity;

      return totalPrice.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
      });
    }
  },
  methods: {
    ...mapActions(['addCart', 'clearCart', 'removeCart']),
    addToCart() {
      this.addCart({
        product: this.product,
        quantity: this.pQuantity
      });
    },
    increaseQuantity() {
      if (this.pQuantity < 10) {
        this.pQuantity++;
        this.product.quantity = this.pQuantity;
      }
    },
    decreaseQuantity() {
      if (this.pQuantity > 1) {
        this.pQuantity--;
        this.product.quantity = this.pQuantity;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@use '../assets/scss/abstracts/variables' as *;

.productCard {
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

  .productImg {
    width: 25%;
    height: auto;
    align-self: center;
  }

  @media screen and (max-width: 421px) {
    .moreMinusBtns {
      margin-left: $mg-1 !important;
    }
  }
  @media screen and (max-width: 437px) {
    .description {
      display: none;
    }
    .moreMinusBtns {
      margin-right: 1.5rem !important;
      margin-left: $mg-3;

      display: flex;
      flex-direction: row-reverse;

      .decreaseBtn {
        margin-bottom: $mg-1;
        margin-right: $mg-0-75;
      }
    }

    .name b {
      display: none;
    }

    .productDetails .price {
      display: flex;
    }
  }
  @media screen and (max-width: 469px) {
    .moreMinusBtns {
      margin-right: $mg-2;

      .increaseBtn {
        margin-bottom: $mg-1-75;
        margin-top: $mg-0-75;
      }
    }

    .removeBtn {
      margin-bottom: 0.3rem;
    }
  }
  @media screen and (min-width: 506px) {
    .productDetails .description {
      width: 90%;
    }
  }
  @media screen and (max-width: 642px) {
    .productImg {
      display: none;
    }
  }
  @media screen and (min-width: 768px) {
    margin-top: $mg-2-5;
    margin-bottom: $mg-0-5;
    max-width: 664px;
    max-height: 134px;
    margin-left: auto;
    margin-right: auto;
    .removeBtn {
      margin-bottom: 0.6rem;
    }
  }
}

.productDetails {
  align-self: center;
  margin-left: $mg-1;

  .name {
    font-weight: $wgt-semi-bold;
  }
  .name b,
  .price {
    color: $third-color;
    font-size: $txt-font-size;
    font-weight: $wgt-semi-bold;
  }

  .price {
    display: none;
  }

  .description {
    margin-top: $mg-0-5;
    width: 100%;

    overflow: hidden;
    text-overflow: ellipsis;
    //☝🏽 Add "..." in the end
    display: -webkit-box;
    -webkit-line-clamp: 2;
    //☝🏽 Line count
    -webkit-box-orient: vertical;
  }
}

.btns {
  background: transparent;
  font-size: $mg-1-75;
  display: flex;
  align-self: center;
}

.moreMinusBtns {
  margin-right: $mg-2-5;

  .increaseBtn {
    margin-bottom: $mg-1-5;
    margin-top: $mg-0-5;
  }

  .increaseBtn:hover,
  .decreaseBtn:hover {
    opacity: 0.4;
  }
}

.removeBtn {
  color: $second-color;
  font-size: $mg-2;
  //👇🏽 top right left bottom
  padding: 0 1rem 0rem 0;

  &:hover {
    color: $alt-second-color;
  }
}

.quantityLabel {
  position: absolute;
  width: 3rem;
  top: 0rem;
  right: 0rem;

  text-align: center;
  box-shadow: 0 4px 14px $shadow-color;
  border-radius: $border-inside-radius;
}
</style>
