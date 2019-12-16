<template>
  <nav class="nav" v-bind:class="[theme]">
    <ul class="row nav__list">
      <li class="nav__item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="nav__item">
        <router-link to="/talks">Talks</router-link>
      </li>
      <li class="nav__item">
        <a href="https://medium.com/@ManuCastrillonM" target="_blank">Blog</a>
      </li>
      <li class="nav__item">
        <a href="https://www.youtube.com/channel/UC4LjWxfLOQlx2ciIu0KFtWQ" target="_blank">Vlog</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  props: {
    theme: String
  }
}
</script>

<style lang="scss">
@import '~styles/variables';
@import '~styles/mixins';
@import '~styles/functions';

.nav {
  z-index: 1000;
  width: 100%;

  &.light {
    position: absolute;

    .nav__item {
      a {
        color: color('white');
      }

      &::after {
        background: color('nevada');
      }

      &:hover {
        a {
          color: color('nevada');
        }

        &::after {
          background: color('white');
        }
      }
    }
  }

  &.dark {
    .nav__item {
      a {
        color: color('nevada');
      }

      &::after {
        background: color('pink');
      }

      &:hover {
        a {
          color: color('pink');
        }

        &::after {
          background: color('nevada');
        }
      }
    }
  }

  &__item {
    font-size: 20px;
    margin: 0 5px;
    position: relative;

    a {
      padding: 5px;
      transition: color 0.2s;
    }

    &::after {
      content: '';
      border-radius: 5px;
      bottom: 0;
      height: 2px;
      left: 0;
      position: absolute;
      transform: rotate(5deg);
      transition: bottom 0.1s, transform 0.1s, background 0.1s;
      width: 100%;
    }

    &:hover {
      &::after {
        bottom: 40%;
        transform: rotate(0deg);
      }
    }

    @include from('md') {
      margin: 0 20px;

      a {
        padding: 10px;
      }
    }
  }

  &__list {
    display: flex;
    justify-content: flex-end;
    padding: 20px 0;

    @include from('md') {
      padding: 20px 50px;
    }
  }
}
</style>
