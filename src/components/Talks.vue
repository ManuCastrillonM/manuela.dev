<template>
  <section class="talks" id="talks">
    <h2 class="talks__title">Talks</h2>
    <ul class="talks__list">
      <li v-for="talk in filteredBlogs"
        :key="talk.title"
        class="talks__item">
        <h3>{{ talk.title }}</h3>
        <div>
          <a v-for="resource in talk.resources"
            :key="resource.name"
            :href="resource.url"
            class="talks__resource"
          >{{ resource.name }}</a>
        </div>
      </li>
    </ul>
    <button class="talks__show-more" @click="showMore = !showMore">
      <span v-if="!showMore">Show more</span>
      <span v-else>Show less</span>
    </button>
  </section>
</template>

<script>
import talks from '@/assets/data/talks.js'

export default {
  data () {
    return {
      talks,
      showMore: false
    }
  },
  computed: {
    filteredBlogs () {
      if (this.showMore) {
        return this.talks
      } else {
        return this.talks.slice(0, 4)
      }
    }
  }
}
</script>

<style lang="scss">
@import '../scss/variables';
@import '../scss/mixins';
@import '../scss/typography';

.talks {
  &__item {
    padding: 30px 10px;
    position: relative;

    @include from('lg') {
      padding: 50px 20px;
      transition: all .3s ease-in;

      &:hover {
        border-color: transparent;
        color: $white;

        +.talks__item {
          border-color: transparent;
        }

        .talks__resource {
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

  &__resource {
    color: $alizarin-crimson;
    display: inline-block;
    font-size: 12px;
    padding-top: 5px;
    text-transform: uppercase;

    &:not(:last-child) {
      &::after {
        content: '|';
        margin: 0 5px;
      }
    }
  }

  &__show-more {
    @extend %cta;

    background: none;
    border: none;
    cursor: pointer;
  }

  &__title {
    @extend %section-title;
  }
}
</style>
