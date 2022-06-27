<template>
  <div class="home">
    <div class="home__container">
      <div class="home__content">
        <hero />
        <about />
        <blog />
        <vlog />
        <projects />
        <talks />
        <contact />
        <bottom />
      </div>
    </div>
    <div class="home__navigation-container">
      <navigation />
    </div>
  </div>
</template>

<script>
import About from '@/components/HomeAbout'
import Blog from '@/components/HomeBlog'
import Contact from '@/components/HomeContact'
import Bottom from '@/components/HomeFooter'
import Hero from '@/components/HomeHero'
import Navigation from '@/components/HomeNavigation'
import Projects from '@/components/HomeProjects'
import Talks from '@/components/HomeTalks'
import Vlog from '@/components/HomeVlog'

export default {
  components: {
    About,
    Blog,
    Contact,
    Bottom,
    Hero,
    Navigation,
    Projects,
    Talks,
    Vlog
  }
}
</script>

<style lang="scss">
@import '../scss/variables';
@import '../scss/mixins';

.home {
  @include from('lg') {
    display: flex;
  }

  &__container {
    background: $pot-pourri;

    @include from('lg') {
      width: 70%;
      z-index: 1;
    }
  }

  &__content {
    margin: 0 auto;
    max-width: 90%;

    @include from('md') {
      max-width: 80%;
    }

    @include from('lg') {
      margin-right: 0;
      max-width: 95%;
      padding-right: 40px;
      width: 971px;
    }
  }

  &__navigation-container {
    @include from('lg') {
      position: fixed;
      right: 0;
      width: 30%;
    }
  }
}
</style>
