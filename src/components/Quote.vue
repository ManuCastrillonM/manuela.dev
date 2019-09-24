<template>
  <section class="quote row middle-xs center-xs" aria-label="quote">
    <p class="no-margin quote-text col-xs-12">
      {{ quote }}
    </p>
    <p class="quote-author col-xs-offset-8 col-xs-4">
      - {{ author }}
    </p>
  </section>
</template>

<script>
export default {
  data () {
    return {
      quote: 'If you can dream it, you can do it',
      author: 'Walt Disney'
    }
  }
}
</script>

<style lang="scss">
@import '~styles/variables';
@import '~styles/mixins';
@import '~styles/functions';

.quote {
  background-image: linear-gradient(rgba(color('pink'), 0.2),
                                  rgba(color('nevada'), 0.2)),
                  url('../assets/images/hero-bg.svg');
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  min-height: 20vh;
  padding: 30px 10px;

  &-text {
    font-size: 60px;
    color: color('white');
  }

  &-author {
    font-style: italic;
    color: color('white');
    font-size: $font-lg;
  }
}
</style>
