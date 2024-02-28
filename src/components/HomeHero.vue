<template>
  <div class="hero" id="hero">
    <div class="hero__content">
      <div class="hero__text">
        <p class="wow zoomIn">{{ $t('common.heroMessage') }}</p>
        <h1 class="hero__title wow fadeIn">
          <span class="wow flipInY" data-wow-delay="0.15s">M</span>
          <span class="wow flipInY" data-wow-delay="0.20s">a</span>
          <span class="wow flipInY" data-wow-delay="0.25s">n</span>
          <span class="wow flipInY" data-wow-delay="0.30s">u</span>
          <br />
          <span class="wow flipInY" data-wow-delay="0.35s">C</span>
          <span class="wow flipInY" data-wow-delay="0.40s">a</span>
          <span class="wow flipInY" data-wow-delay="0.45s">s</span>
          <span class="wow flipInY" data-wow-delay="0.50s">t</span>
          <span class="wow flipInY" data-wow-delay="0.55s">r</span>
          <span class="wow flipInY" data-wow-delay="0.6s">i</span>
          <span class="wow flipInY" data-wow-delay="0.65s">l</span>
          <span class="wow flipInY" data-wow-delay="0.70s">l</span>
          <span class="wow flipInY" data-wow-delay="0.75s">o</span>
          <span class="wow flipInY" data-wow-delay="0.80s">n</span>
        </h1>
      </div>
      <div class="hero__image-wp wow zoomIn">
        <img
          class="hero__image"
          src="../assets/images/hero.png"
          aria-hidden="true"
        />
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
  padding-top: 60px;
  position: relative;

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

  &__image {
    border-radius: 4px;

    &-wp {
      width: 200px;

      @include from('md') {
        width: 250px;
      }

      @include from('lg') {
        transform: translateX(80px);
        width: 400px;
      }
    }
  }

  &__text {
    color: $thunder;
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
