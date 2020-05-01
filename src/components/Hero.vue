<template>
<div class="hero" id="hero">
  <div class="hero__content">
    <div class="hero__text">
      <p class="wow zoomIn">Hello I'm</p>
      <h1 class="hero__title wow fadeIn">
        <span class="wow flipInY" data-wow-delay="0.15s">M</span>
        <span class="wow flipInY" data-wow-delay="0.30s">a</span>
        <span class="wow flipInY" data-wow-delay="0.45s">n</span>
        <span class="wow flipInY" data-wow-delay="0.60s">u</span>
        <br>
        <span class="wow flipInY" data-wow-delay="0.75s">C</span>
        <span class="wow flipInY" data-wow-delay="1s">a</span>
        <span class="wow flipInY" data-wow-delay="1.15s">s</span>
        <span class="wow flipInY" data-wow-delay="1.30s">t</span>
        <span class="wow flipInY" data-wow-delay="1.45s">r</span>
        <span class="wow flipInY" data-wow-delay="1.60s">i</span>
        <span class="wow flipInY" data-wow-delay="1.75s">l</span>
        <span class="wow flipInY" data-wow-delay="2s">l</span>
        <span class="wow flipInY" data-wow-delay="2.15s">o</span>
        <span class="wow flipInY" data-wow-delay="2.30s">n</span>
      </h1>
    </div>
    <div class="hero__image-wp wow zoomIn">
      <img class="hero__image" src="../assets/images/hero.png" aria-hidden="true">
    </div>
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
    min-height: 740px;
  }

  &__content {
    align-items: flex-end;
    display: flex;
    justify-content: flex-end;
    position: relative;
    width: 100%;

    @include from('md') {
      justify-content: space-between;
    }
  }

  &__image-wp {
    width: 250px;

    @include from('md') {
      width: 300px;
    }

    @include from('lg') {
      transform: translateX(80px);
      width: 500px;
    }
  }

  &__text {
    color: $mandy;
    font-weight: 700;
    left: 0;
    position: absolute;

    @include from('md') {
      position: initial;
    }

    @include from('lg') {
      margin-right: -60px;
    }

    p {
      font-size: 30px;
      margin: 0;
      text-decoration: underline;
    }
  }

  &__title {
    font-size: 60px;

    @include from('md') {
      font-size: 5em;
    }
  }
}
</style>
