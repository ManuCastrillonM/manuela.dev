<template>
  <header class="hero">
    <div class="row center-xs middle-xs">
      <div class="wow fadeIn hero__square">
        <p class="hero__text">
          Manu <br/>
          Castrillón
        </p>
        <span class="hero__tag">#WomenInTech</span>
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
  background-image: linear-gradient(rgba(color('pink'), 0.2),
                                    rgba(color('nevada'), 0.2)),
                    url('../assets/images/hero-bg.svg');
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

  &__tag {
    font-size: 16px;
    letter-spacing: 1.5px;
    margin-top: 10px;
  }

  &__text {
    font-size: 40px;
    font-weight: 600;
    margin: 0;
  }
}
</style>
