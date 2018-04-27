<template>
  <header class="header">
    <div class="header-container row center-xs middle-xs">
      <div class="header-container-text">
        <p class="header-container-text-content title-font"
          data-heading="Hello World! I'm Manuela Castrillón|"
        >
          Hello World! I'm Manuela Castrillón <span class="header-blink">|</span>
        </p>
      </div>
      <vue-particles
        class="header-particles"
        color="#dedede"
        :particleOpacity="0.2"
        :particlesNumber="90"
        shapeType="circle"
        :particleSize="30"
        :lineLinked="false"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="repulse"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
    </div>
  </header>
</template>

<style lang="scss">
@import '~styles/variables';
@import '~styles/mixins';
@import '~styles/functions';

.header {

  &-container {
    background: linear-gradient(color('color-secondary'), color('color-accent'));
    height: 100vh;
    position: relative;
    padding: 50px;

    &-text {
      z-index: 100;

      &-content {
        @include title-effect(color('white'), color('color-primary-dark'), color('white'), color('color-primary'));
        font-size: 2rem;
        font-weight: bold;
        overflow: hidden;
        user-select: none;

        @include from ('md') {
          animation: type 3s ease-in forwards;
          font-size: 3rem;
          white-space: nowrap;
          width: 0;
        }

        @include from ('lg') {
          font-size: 5rem;
        }
      }
    }
  }

  &-particles {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 50;
  }

  &-blink {
    animation: blink 1s infinite;
    color: color('color-accent');
  }
}

@keyframes blink {
  to {
    opacity: 0;
  }
}

@keyframes type {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
</style>
