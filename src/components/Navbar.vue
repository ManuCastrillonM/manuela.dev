<template>
  <nav class="nav" v-bind:class="[theme]">
    <ul class="row nav-list">
      <li class="nav-item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/resume">Resume</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/talks">Talks</router-link>
      </li>
      <li class="nav-item">
        <a href="https://medium.com/@ManuCastrillonM" target="_blank">Blog</a>
      </li>
      <li class="nav-item">
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
  position: absolute;
  z-index: 1000;
  width: 100%;

  &.light {
    .nav-item {
      a {
        color: color('white');
      }

      &::after {
        background: color('camelot');
        border-bottom: 1px solid color('jon');
      }

      &:hover {
        a {
          color: color('camelot');
        }

        &::after {
          background: color('white');
        }
      }
    }
  }

  &.dark {
    .nav-item {
      a {
        color: color('camelot');
      }

      &::after {
        background: color('camelot');
        border-bottom: 1px solid color('jon');
      }

      &:hover {
        a {
          color: color('camelot');
        }

        &::after {
          background: color('white');
        }
      }
    }
  }

  &-item {
    font-size: 18px;
    margin: 0 5px;
    padding: 5px;
    position: relative;

    a {
      transition: color 0.2s;
    }

    &::after {
      content: '';
      border-radius: 5px;
      bottom: 8px;
      height: 2px;
      left: 0;
      position: absolute;
      transform: rotate(5deg);
      transition: transform 0.2s, background 0.2s;
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
      padding: 10px;
    }
  }

  &-list {
    display: flex;
    justify-content: flex-end;

    @include from('md') {
      &.row {
        margin: 20px 50px;
      }
    }
  }
}
</style>
