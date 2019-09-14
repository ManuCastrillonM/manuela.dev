<template>
  <header class="hero">
    <div class="hero-container row center-xs middle-xs">
      <div class="wow fadeIn hero-container-square">
        <div class="hero-container-text">
          <p>
            Manu <br/>
            Castrillón
          </p>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import WOW from 'wow.js/dist/wow.min'

export default {
  name: 'hero',
  mounted () {
    new WOW().init()
  }
}
</script>

<style lang="scss">
@import '~styles/variables';
@import '~styles/mixins';
@import '~styles/functions';

.hero-container {
  background-image: linear-gradient(rgba(color('wine-berry'), 0.95),
                                    rgba(color('jon'), 0.95)),
                    url('../assets/images/hero-image.png');
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  min-height: 400px;

  &-square {
    border: 8px solid color('white');
    max-width: 300px;
    min-width: 230px;
    position: relative;
    width: 15vw;

    &::after {
      content: '';
      display: block;
      padding-bottom: 100%;
    }
  }

  &-text {
    align-items: center;
    color: color('white');
    display: flex;
    font-size: 40px;
    height: 100%;
    justify-content: center;
    position: absolute;
    width: 100%;

    &::after {
      content: '';
      border: 3px solid color('white');
      height: 100%;
      left: 12px;
      position: absolute;
      top: 12px;
      width: 100%;
    }
  }
}
</style>
