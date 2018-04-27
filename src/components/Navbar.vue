<template>
  <nav class="nav title-font">
    <ul class="row nav-list">
      <li class="nav-item">
        <a href="">About</a>
      </li>
      <li class="nav-item">
        <a href="">Resume</a>
      </li>
      <li class="nav-item">
        <a href="">Skills</a>
      </li>
      <li class="nav-item">
        <a href="">Contact</a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
@import '~styles/variables';
@import '~styles/mixins';
@import '~styles/functions';

.nav {
  position: absolute;
  z-index: 1000;
  width: 100%;
  display: none;

  @include from ('md') {
    display: inline;
  }

  &-list {
    display: flex;
    justify-content: flex-end;

    &.row {
      margin: 20px 50px;
    }
  }

  &-item {
    font-size: 28px;
    margin: 0 20px;
    padding: 10px;
    position: relative;

    a {
      color: color('white');
      transition: color 0.2s;
    }

    &::after {
      content: '';
      width: 100%;
      height: 2px;
      background: color('color-primary');
      border-bottom: 1px solid color('color-accent');
      position: absolute;
      bottom: 12px;
      left: 0;
      transform: rotate(10deg);
      transition: transform 0.2s, background 0.2s;
    }

    &:hover {
      a {
        color: color('color-primary');
      }

      &::after {
        background: color('white');
        bottom: 40%;
        transform: rotate(0deg);
      }
    }
  }
}
</style>
