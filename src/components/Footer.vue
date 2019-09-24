<template>
  <footer class="footer">
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8 col-md-offset-2 col-md-4">
        Made with <i class="em em-heartpulse"></i> by <a href="https://www.github.com/manucastrillonm">@manucastrillonm</a>
      </div>
      <div class="col-xs-offset-2 col-xs-8 col-md-offset-0 col-md-4">
        You can find the source code of this page on
        <a href="https://www.github.com/manucastrillonm/manucastrillonm.co">
        <i class="fab fa-github contact-icon-fa"></i>
        GitHub
        </a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
@import '~styles/variables';
@import '~styles/functions';

.footer {
  border-top: 2px solid color('egg-blue');
  padding: 20px 0;
  position: relative;

  &::after {
    content: '';
    border-top: 1px solid color('salomie');
    left: 0;
    position: absolute;
    top: 0;
    transform: translateY(6px);
    width: 100%;
  }
}
</style>
