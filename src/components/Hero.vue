<template>
<div class="hero" id="hero">
  <h1 class="hero__text">
    Hello <br>
    I'm <span class="hero__text-name">Manu <br> Castrillon</span>
  </h1>
  <div class="hero__image-wp">
    <img class="hero__image" src="../assets/images/hero.png" aria-hidden="true">
  </div>
</div>
</template>

<style lang="scss">
@import '../scss/variables';
@import '../scss/mixins';

.hero {
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: flex-end;
  max-height: 600px;
  padding-top: 60px;
  position: relative;

  @include from('md') {
    max-height: 800px;
  }

  @include from('lg') {
    max-height: unset;
  }

  &__image-wp {
    width: 290px;

    @include from('md') {
      width: 420px;
    }

    @include from('lg') {
      transform: translateX(80px);
      width: 500px;
    }
  }

  &__text {
    color: $alizarin-crimson;
    font-size: 60px;
    font-weight: 800;
    left: 0;
    position: absolute;
    z-index: 1;

    @include from('md') {
      font-size: 100px;
    }

    @include from('lg') {
      font-size: 120px;
    }
  }

  &__text-name {
    text-decoration: underline;
  }
}
</style>
