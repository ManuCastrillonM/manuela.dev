<template>
  <footer class="footer">
    {{ $t('common.footerMessage') }}
    <a
      class="footer__user"
      href="https://github.com/ManuCastrillonM/manuela.dev"
      >@manucastrillonm</a
    >
  </footer>
</template>

<style lang="scss">
@import '../scss/variables';
@import '../scss/mixins';

.footer {
  border-top: 1px solid $silver;
  padding: 30px 0;

  &__user {
    color: $mandy;
    font-weight: 700;
  }
}
</style>
