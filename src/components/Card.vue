<template>
  <article class="card">
    <div class="cardOverlay">
      <a href="#open-modal" class="button">Descrição</a>
    </div>

    <img
      src="https://i.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA"
      alt=""
      class="img"
    />
    <a href="" class="favoriteBtn">
      <Icon icon="mdi:cards-heart-outline" />
    </a>

    <h3 class="price">R$15,00</h3>
    <span class="title">Necessaire compreensivo</span>

    <a href="" class="button cartBtn">
      <Icon icon="mdi:cart-outline" />
    </a>

    <div id="open-modal" class="modal">
      <div>
        <a href="#" title="Fechar modal" class="modal-close">
          <Icon icon="mdi:window-close" />
        </a>
        <span>Descrição:</span>
        <p>
          A CSS-only modal based on the :target pseudo-class. Hope you find it
          helpful.
        </p>
      </div>
    </div>
  </article>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
  components: {
    Icon
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
  background-color: $shadow-color;
  inset: 0;
  z-index: 999;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: all 0.3s;
}
.modal:target {
  visibility: visible;
  opacity: 1;
  pointer-events: auto;
}
.modal > div {
  width: 25rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem;
  background: $container-color;
  border-radius: 0.7rem;
}
.modal span {
  font-size: $h2-font-size;
  color: $title-color;
  font-weight: bold;
}
.modal p {
  font-size: $normal-font-size;
  width: 100%;
  color: $txt-color;
  margin-top: 0.8rem;
}
.modal-close {
  color: #f34747;
  font-size: 2.4rem;
  position: absolute;
  right: 0;
  top: 0.6rem;
  width: 70px;
  text-align: center;
}
.modal-close:hover {
  color: red;
}

@media screen and (max-width: 470px) {
  .modal > div {
    width: 20rem;
  }
}

@media screen and (max-width: 400px) {
  .modal > div {
    width: 15rem;
  }
}
</style>
