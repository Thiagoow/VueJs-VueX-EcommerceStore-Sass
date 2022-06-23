<template>
  <header class="header" id="header">
    <nav class="nav bdGrid">
      <a class="toggleIcon">
        <Icon icon="ic:round-menu" @click="toggleNav" id="nav-toggle" />
      </a>

      <a href="/" class="navLogo">Acme Store</a>

      <div class="navMenu" id="nav-menu">
        <ul class="navList">
          <li class="navItem">
            <a href="/" class="navLink activeLink">Home</a>
          </li>
          <li class="navItem">
            <a
              href="https://www.behance.net/thiagoow"
              target="_blank"
              class="navLink"
              >Produtos</a
            >
          </li>
          <li class="navItem">
            <a
              href="https://github.com/Thiagoow/VueJs-VueX-EcommerceStore-Sass/tree/DOT-DigitalGroup"
              target="_blank"
              class="navLink"
              >Sobre</a
            >
          </li>
        </ul>
      </div>

      <div class="iconBtns">
        <router-link to="favoritos" class="favoriteIcon">
          <Icon icon="mdi:heart" />
          <sup id="favoritesCount">{{ favoritesItemCount }}</sup>
        </router-link>

        <router-link to="carrinho" class="shopIcon">
          <Icon icon="mdi:shopping" />
          <sup id="cartCount">{{ cartItemCount }}</sup>
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script>
import { Icon } from '@iconify/vue';
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  components: {
    Icon
  },
  computed: {
    ...mapState(['cart', 'favorites']),
    ...mapGetters(['cartItemCount', 'favoritesItemCount'])
  },
  mounted() {
    /* When app is initialized, get
    all items from cart & favorites API route: */
    this.getCartItems();
    this.getFavoriteItems();
  },
  methods: {
    toggleNav() {
      const nav = document.getElementById('nav-menu');
      nav.classList.toggle('showMenu');
    },
    ...mapActions(['getCartItems', 'getFavoriteItems'])
  }
};
</script>

<style lang="scss" scoped>
@use '../assets/scss/abstracts/variables' as *;

.bdGrid {
  max-width: 1024px;
  display: grid;
  grid-template-columns: 100%;
  column-gap: 2rem;

  width: calc(100% - 4rem);
  margin-left: $mg-2;

  @media screen and (min-width: 1280px) {
    width: 100%;
    margin-left: 11rem;
  }
}

.header {
  width: 100%;
  position: fixed;
  justify-content: center;

  top: 0;
  left: 0;
  z-index: $z-fixed;
  background-color: $container-color;
  box-shadow: 0 2px 4px $shadow-color;
}

.showMenu {
  left: 0 !important;
}

.nav {
  height: $header-height;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .navMenu {
    background-color: $container-color;

    @media screen and (max-width: 320px) {
      width: 100%;
    }
    @media screen and (min-width: 320px) {
      width: 50%;
    }
    @media screen and (min-width: 524px) {
      width: 30%;
    }
    @media screen and (max-width: 768px) {
      position: fixed;
      top: $header-height;
      left: -100%;

      height: 100vh;
      padding: 2rem;
      background-color: #222;
      transition: 0.5s;
    }
  }

  .navItem {
    margin-bottom: $mg-3;
    .navLink {
      color: $container-color;
    }
  }
  .navLogo {
    margin-left: 4.3rem;
    font-weight: $wgt-semi-bold;

    @media screen and (max-width: 320px) {
      display: none;
    }
    @media screen and (max-width: 445px) {
      margin-left: -4.3rem;
    }
    @media screen and (max-width: 355px) {
      margin-left: -2.3rem;
    }
    @media screen and (max-width: 336px) {
      margin-left: -1.8rem;
    }
  }

  .toggleIcon,
  .iconBtns {
    cursor: pointer;
    margin-top: 0.5rem;
    font-size: calc($h2-font-size + 0.2rem);

    .shopIcon {
      margin-left: $mg-2;

      @media screen and (max-width: 445px) {
        margin-left: $mg-1-5;
      }
    }
  }
  sup {
    font-size: $small-font-size;
  }
}

.activeLink {
  position: relative;

  &:before {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 45%;
    width: 4px;
    height: 4px;
    background-color: $container-color;
    border-radius: 50%;
  }
}

@media screen and (min-width: 768px) {
  .nav {
    height: calc($header-height + 0.8rem);
  }

  .toggleIcon {
    display: none;
  }

  .navList {
    display: flex;

    .navItem {
      margin-left: $mg-3;
      margin-bottom: 0;

      .navLink,
      .activeLink:before {
        color: $txt-color;
        font-weight: $wgt-semi-bold;
      }
    }
  }
}

.navList {
  margin-left: 0%;

  @media screen and (min-width: 800px) {
    margin-left: 10%;
  }
  @media screen and (min-width: 860px) {
    margin-left: 20%;
  }
  @media screen and (min-width: 900px) {
    margin-left: 40%;
  }
  @media screen and (min-width: 960px) {
    margin-left: 50%;
  }
  @media screen and (min-width: 1093px) {
    margin-left: 60%;
  }
}
</style>
