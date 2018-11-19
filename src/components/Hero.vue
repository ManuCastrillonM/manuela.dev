<template>
  <header class="header">
    <div class="header-container row center-xs middle-xs">
      <div class="wow fadeIn header-container-square">
        <div class="header-container-text">
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

.header-container {
  background: linear-gradient(color('wine-berry'), color('jon'));
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
