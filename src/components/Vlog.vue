<template>
  <section class="vlog" id="vlog">
    <h1 class="vlog__title">Vlog</h1>
    <div class="vlog__video-container">
      <div class="vlog__video">
        <iframe class="vlog__video-frame"
        src="https://www.youtube.com/embed/TuBEj31oEEw?controls=0"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
      </div>
    </div>
    <a class="vlog__see-more" href="https://www.youtube.com/channel/UC4LjWxfLOQlx2ciIu0KFtWQ">See more</a>
  </section>
</template>

<style lang="scss">
@import '../scss/variables';
@import '../scss/mixins';
@import '../scss/typography';

.vlog {
  &__see-more {
    @extend %cta;
  }

  &__title {
    @extend %section-title;
  }

  &__video {
    padding-top: 56.25%;
    position: relative;
  }

  &__video-container {
    background: $alizarin-crimson;
    margin-bottom: 15px;
    padding: 20px;

    @include from('lg') {
      transform: translateX(80px);
    }
  }

  &__video-frame {
    bottom: 0;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
  }
}
</style>
