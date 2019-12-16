<template>
  <header class="hero">
    <div class="row center-xs middle-xs">
      <div class="wow fadeIn hero__square">
        <p class="hero__text">
          Manu <br/>
          Castrillón
        </p>
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

.hero {
  background-image: linear-gradient(rgba(color('pink'), 0.7),
                                    rgba(color('nevada'), 0.4)),
                    url('../assets/images/hero-bg.jpeg');
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  min-height: 400px;

  &__square {
    align-items: center;
    background: color('white');
    color: color('nevada');
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 300px;
    min-width: 230px;
    padding: 20px;
    position: relative;
    width: 30vw;
  }

  &__text {
    font-size: 40px;
    font-weight: 600;
    margin: 0;
  }
}
</style>
