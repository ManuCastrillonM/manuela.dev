<template>
  <nav class="mobile-nav">
    <div class="row"></div>
    <!-- <ul class="row mobile-nav-list">
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
    </ul> -->
  </nav>
</template>

<style lang="scss">
  .mobile-nav {

    @include from ('md') {
      display: none;
    }
  }
</style>
