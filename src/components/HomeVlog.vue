<template>
  <section class="vlog" id="vlog">
    <h2 class="vlog__title wow fadeIn">{{ $t('common.vlog') }}</h2>
    <div class="vlog__video-container wow fadeIn">
      <div class="vlog__video">
        <iframe
          class="vlog__video-frame"
          src="https://www.youtube.com/embed/ioRAHtJMbg4"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <a
      class="vlog__see-more"
      href="https://www.youtube.com/channel/UC4LjWxfLOQlx2ciIu0KFtWQ"
      >{{ $t('common.showMore') }}</a
    >
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
    background: $mandy;
    border-radius: 4px;
    margin-bottom: 15px;
    padding: 20px;

    @include from('lg') {
      transform: translateX(80px);
    }
  }

  &__video-frame {
    border-radius: 4px;
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
