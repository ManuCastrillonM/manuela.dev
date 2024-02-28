<template>
  <section class="about" id="about">
    <h2 class="about__title wow fadeIn">{{ $t('common.about') }}</h2>
    <div class="about__container wow fadeIn">
      <p class="about__description" v-html="$t('about.bio')" />
      <ul class="about__info">
        <li class="about__info-item">
          <span class="about__info-title">{{ $t('about.name') }}</span
          ><br />
          Manuela Castrillón
        </li>
        <li class="about__info-item">
          <span class="about__info-title">{{ $t('about.email') }}</span
          ><br />
          hello@manuela.dev
        </li>
        <li class="about__info-item">
          <span class="about__info-title">{{ $t('about.location') }}</span
          ><br />
          Amsterdam
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss">
@import '../scss/variables';
@import '../scss/mixins';
@import '../scss/typography';

.about {
  &__container {
    align-items: center;
    display: flex;
    flex-direction: column;

    @include from('lg') {
      flex-direction: row;
      transform: translateX(80px);
    }
  }

  &__description {
    font-size: 16px;
    line-height: 22px;

    @include from('lg') {
      padding-right: 20px;
      width: 65%;
    }
  }

  &__info {
    background: $thunder;
    border-radius: 4px;
    color: $white;
    margin: 0;
    padding: 30px 20px;

    @include from('lg') {
      width: 35%;
    }
  }

  &__info-item {
    word-break: break-word;

    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  &__info-title {
    font-size: 11px;
    text-transform: uppercase;
  }

  &__title {
    @extend %section-title;
  }
}
</style>
