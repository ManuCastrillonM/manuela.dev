<template>
  <section class="blog" id="blog">
    <h2 class="blog__title wow fadeIn">Blog</h2>
    <ul class="blog__list">
      <li v-for="blog in blogs"
        :key="blog.title"
        class="blog__item wow fadeIn">
        <span class="blog__date">{{ blog.date }}</span>
        <h3 class="blog__name">
          <a :href="blog.url" target="blank">{{ blog.title }}</a>
        </h3>
      </li>
    </ul>
    <a class="blog__read-more" href="https://medium.com/@ManuCastrillonM">Read more</a>
  </section>
</template>

<script>
import blogs from '@/assets/data/blogs.js'
import WOW from 'wow.js/dist/wow.min'

export default {
  data () {
    return {
      blogs
    }
  },
  mounted () {
    new WOW().init()
  }
}
</script>

<style lang="scss">
@import '../scss/variables';
@import '../scss/mixins';
@import '../scss/typography';

.blog {
  &__date {
    color: $alizarin-crimson;
    display: block;
    font-size: 12px;
    margin-bottom: 5px;
    text-transform: uppercase;
  }

  &__item {
    padding: 30px 10px;
    position: relative;

    @include from('lg') {
      padding: 50px 20px;
      transition: all .3s ease-in;

      &:hover {
        border-color: transparent;
        color: $white;

        +.blog__item {
          border-color: transparent;
        }

        .blog__name a,
        .blog__date {
          color: $white;
        }

        &::after {
          opacity: 1;
          width: calc(100% + 60px);
        }
      }
    }

    &:not(:first-child) {
      border-top: 1px solid $silver;

      @include from('lg') {
        &:hover {
          border-color: transparent;
        }
      }
    }

    &::after {
      background: $alizarin-crimson;
      content: '';
      display: block;
      height: 100%;
      left: 0;
      opacity: 0;
      position: absolute;
      transition: all .3s ease-in;
      top: 0;
      width: 100%;
      z-index: -1;
    }
  }

  &__name {
    a {
      color: $black;
    }
  }

  &__read-more {
    @extend %cta;
  }

  &__title {
    @extend %section-title;
  }
}
</style>
