<template>
  <header class="header" id="header">
    <nav class="nav bdGrid">
      <a class="toggleIcon" id="nav-toggle">
        <Icon icon="ic:round-menu" @click="toggleNav" />
      </a>

      <a href="/" class="navLogo">Acme Store</a>

      <div class="navMenu" id="nav-menu">
        <ul class="navList">
          <li class="navItem">
            <a href="/" class="navLink activeLink">Home</a>
          </li>
          <li class="navItem">
            <a href="/produtos" class="navLink">Produtos</a>
          </li>
          <li class="navItem">
            <a href="/sobre" class="navLink">Sobre</a>
          </li>
        </ul>
      </div>

      <div class="btns">
        <a href="/favorites" class="favoriteIcon">
          <Icon icon="mdi:heart" />
          <sup id="favoritesCount">12</sup>
        </a>

        <a href="/cart" class="shopIcon">
          <Icon icon="mdi:shopping" />
          <sup id="cartCount">12</sup>
        </a>
      </div>
    </nav>
  </header>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
  components: {
    Icon
  },
  methods: {
    toggleNav() {
      const toggle = document.getElementById('nav-toggle');
      const nav = document.getElementById('nav-menu');

      if (toggle && nav) {
        toggle.addEventListener('click', () => {
          nav.classList.toggle('showMenu');
        });
      }
    }
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
      background-color: $alt-first-color;
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
    margin-left: 4rem;
    font-weight: $wgt-semi-bold;
  }

  .toggleIcon,
  .btns {
    cursor: pointer;
    margin-top: 0.5rem;
    font-size: calc($h2-font-size + 0.2rem);

    .favoriteIcon {
      margin-right: $mg-3;
    }
    sup {
      font-size: $small-font-size;
    }
  }

  .showMenu {
    left: 0;
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
}

@media screen and (min-width: 768px) {
  .nav {
    height: calc($header-height + 0.8rem);
  }
  .toggleIcon {
    display: none;
  }

  .navLogo {
    margin-left: $mg-3;
  }

  .navList {
    display: flex;
    margin-left: 11.5rem;

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
</style>
