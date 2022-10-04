<template>
    <section class="courses" id="courses">
        <h2 class="courses__title wow fadeIn">{{ $t('common.courses') }}</h2>
        <div class="courses__list">
            <a v-for="item in courses"
                :key="item.name"
                :href="item.link"
                class="courses__item"
                target="_blank">
                <div
                    class="courses__background"
                    :style="{ backgroundImage: 'url(' + getImage(item.image) + ')' }"/>

                <div class="courses__details">
                    <span class="courses__platform">{{ item.platform }}</span>
                    <p class="courses__name">{{ item.name }}</p>
                </div>
            </a>
        </div>
    </section>
</template>

<script>
import courses from '@/assets/data/courses.js'

export default {
  data () {
    return {
      courses
    }
  },
  methods: {
    getImage (element) {
      // eslint-disable-next-line global-require, import/no-dynamic-require
      return require(`../assets/images/courses/${element}`)
    }
  }
}
</script>

<style lang="scss">
@import '../scss/variables';
@import '../scss/mixins';
@import '../scss/typography';

.courses {
    &__background {
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 4px 4px 0 0;
        height: 0;
        padding-top: 56.25%;
        width: 100%;
    }

    &__details {
        background: $mandy;
        border-radius: 0 0 4px 4px;
        color: $white;
        margin: 0;
        padding: 4px 6px;
    }

    &__item{
        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
                    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
        margin: 0 10px;
        transition: transform 0.2s ease-in;
        width: 260px;

        &:hover {
            transform: scale(1.01);
        }
    }

    &__list {
        display: flex;
    }

    &__name {
        margin: 3px 0;
    }

    &__platform {
        font-size: 10px;
        text-transform: uppercase;
    }

    &__title {
        @extend %section-title;
    }
}
</style>
