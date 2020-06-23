<template>
  <section class="portfolio" id="portfolio">
    <h2 class="portfolio__title wow fadeIn">Portfolio</h2>
    <ul class="portfolio__list">
      <li v-for="item in portfolio"
        :key="item.name"
        class="portfolio__item">
        <img :src="getImage(item.image)"
          :alt="`${item.name} screenshot`"
          class="portfolio__image">
        {{ item.name }}
        <div class="portfolio__description">
          {{ item.description }}
          <a :href="item.url"
            target="blank"
            class="portfolio__url">
            {{ item.url }}
          </a>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import portfolio from '@/assets/data/portfolio.js'

export default {
  data () {
    return {
      portfolio
    }
  },
  methods: {
    getImage (element) {
      // eslint-disable-next-line global-require, import/no-dynamic-require
      return require(`../assets/images/${element}`)
    }
  }
}
</script>

<style lang="scss">
@import '../scss/variables';
@import '../scss/mixins';
@import '../scss/typography';

.portfolio {
  &__image {
    opacity: 0.85;
  }

  &__item {
    background: $mandy;
    color: $white;
    font-weight: 700;
    max-width: 250px;
    padding-bottom: 5px;
    position: relative;
    text-align: center;

    &:not(:first-child) {
      margin-left: 15px;
    }

    &:hover {
      .portfolio__description {
        height: 100%;
        padding: 10px;
      }
    }
  }

  &__list {
    display: flex;
  }

  &__description {
    align-items: center;
    background-color: $mandy;
    bottom: 0;
    color: $white;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    height: 0;
    justify-content: center;
    overflow: hidden;
    position: absolute;
    transition: all 0.2s ease-in;
    width: 100%;
  }

  &__title {
    @extend %section-title;
  }

  &__url {
    color: $white;
    margin-top: 10px;
    text-decoration: underline;
  }
}
</style>
