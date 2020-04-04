<template>
  <div class="nav"
  :class="{'nav--active' : isActive}">
    <div class="nav__toggle" v-on:click="toggleNav()">
      <div class="nav__toggle-line"></div>
    </div>
    <nav class="nav__menu">
      <ul class="nav__menu-list">
        <li class="nav__name">
          <a class="nav__item-cta" href="#hero">Manu Castrillon</a>
        </li>
        <li class="nav__item">
          <a class="nav__item-cta" v-on:click="toggleNav()" href="#about">About</a>
        </li>
        <li class="nav__item">
          <a class="nav__item-cta" v-on:click="toggleNav()" href="#blog">Blog</a>
        </li>
        <li class="nav__item">
          <a class="nav__item-cta" v-on:click="toggleNav()" href="#vlog">Vlog</a>
        </li>
        <li class="nav__item">
          <a class="nav__item-cta" v-on:click="toggleNav()" href="#talks">Talks</a>
        </li>
        <li class="nav__item">
          <a class="nav__item-cta" v-on:click="toggleNav()" href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    toggleNav () {
      this.isActive = !this.isActive

      if (this.isActive) {
        document.documentElement.style.overflow = 'hidden'
      } else {
        document.documentElement.style.overflow = 'auto'
      }
    }
  }
}
</script>

<style lang="scss">
@import '../scss/variables';
@import '../scss/mixins';

.nav {
  position: absolute;
  top: 0;

  @include from('lg') {
    position: relative;
  }

  &--active {
    .nav__menu {
      height: 100vh;
    }

    .nav__toggle {
      &::before {
        top: 20px;
        transform: rotate(45deg);
      }

      &::after {
        top: 20px;
        transform: rotate(-45deg);
      }
    }

    .nav__toggle-line {
      display: none;
    }
  }

  &__item {
    cursor: pointer;
    font-size: 18px;
    margin: 15px 0;
    text-align: center;

    @include from('lg') {
      text-align: left;
    }

    &:hover {
      .nav__item-cta {
        color: $alizarin-crimson;
      }
    }
  }

  &__item-cta {
    color: $black;
  }

  &__menu {
    align-items: center;
    background: $white;
    display: flex;
    height: 0;
    justify-content: center;
    overflow: hidden;
    position: fixed;
    top: 0;
    transition: all 0.3s ease-in;
    width: 100vw;
    z-index: 2;

    @include from('lg') {
      height: 100vh;
      max-width: 600px;
      position: relative;
      width: auto;
    }
  }

  &__name {
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 2px;
    margin-bottom: 30px;
    text-decoration: underline;
  }

  &__toggle {
    background: $white;
    cursor: pointer;
    height: 50px;
    padding: 10px;
    position: relative;
    transition: all 0.2s ease-in;
    width: 50px;
    z-index: 3;

    &::before {
      top: 10px;
    }

    &::after {
      bottom: 10px;
    }

    &::after,
    &::before {
      content: '';
      background: $black;
      height: 3px;
      left: 10px;
      position: absolute;
      transition: all 0.2s ease-in;
      width: 30px;
    }

    @include from('lg') {
      display: none;
    }
  }

  &__toggle-line {
    background: $black;
    height: 3px;
    position: absolute;
    top: 23.5px;
    width: 30px;
  }
}
</style>
