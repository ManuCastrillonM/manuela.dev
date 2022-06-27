<template>
  <section class="talks" id="talks">
    <h2 class="talks__title wow fadeIn">{{ $t('common.talks') }}</h2>
    <ul class="talks__list">
      <li
        v-for="talk in filteredBlogs"
        :key="talk.title"
        class="talks__item wow fadeIn"
      >
        <span class="talks__date"
          >{{ talk.date ? localizedDate(talk.date) : ''
          }}{{ talk.date && talk.event ? '  |  ' : '' }} {{ talk.event }}</span
        >
        <h3>{{ talk.title }}</h3>
        <div>
          <a
            v-for="resource in talk.resources"
            :key="resource.name"
            :href="resource.url"
            target="blank"
            class="talks__resource"
            >{{ resource.name }}</a
          >
        </div>
      </li>
    </ul>
    <button class="talks__show-more" @click="showMore = !showMore">
      <span v-if="!showMore">{{ $t('common.showMore') }}</span>
      <span v-else>{{ $t('common.showLess') }}</span>
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
  },
  methods: {
    localizedDate (talkDate) {
      const dateElement = new Date(`${talkDate}T03:24:00`)
      const locale = this.$i18n.locale

      return dateElement.toLocaleDateString(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  }
}
</script>

<style lang="scss">
@import '../scss/variables';
@import '../scss/mixins';
@import '../scss/typography';

.talks {
  &__date {
    color: $mandy;
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
      transition: all 0.3s ease-in;

      &:hover {
        border-color: transparent;
        color: $white;

        + .talks__item {
          border-color: transparent;
        }

        .talks__date,
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
      background: $mandy;
      content: '';
      display: block;
      height: 100%;
      left: 0;
      opacity: 0;
      position: absolute;
      transition: all 0.3s ease-in;
      top: 0;
      width: 100%;
      z-index: -1;
    }
  }

  &__resource {
    color: $mandy;
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
