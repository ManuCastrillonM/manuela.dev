<template>
  <section class="portfolio" id="portfolio">
    <h2 class="portfolio__title wow fadeIn">Portfolio</h2>
    <div class="portfolio__list">
      <div v-for="item in portfolio" :key="item.name" class="portfolio__item">
        <div
          :style="{ backgroundImage: 'url(' + getImage(item.image) + ')' }"
          class="portfolio__image"
        />
        <p class="portfolio__name">
          {{ item.name }}
        </p>
        <div class="portfolio__details">
          <span class="portfolio__description">{{ item.description }}</span>
          <div>
            <a :href="item.url" target="blank" class="portfolio__url">
              <i class="fas fa-globe"></i>
            </a>
            <a :href="item.repoUrl" target="blank" class="portfolio__url">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
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
    background-position: center;
    background-size: cover;
    height: 170px;
    opacity: 0.95;
  }

  &__item {
    background: $mandy;
    color: $white;
    font-weight: 700;
    flex: none;
    position: relative;
    text-align: center;
    height: 200px;
    width: 250px;

    &:not(:first-child) {
      margin-left: 15px;
    }

    &:hover {
      .portfolio__details {
        height: 100%;
        padding: 10px;
      }
    }
  }

  &__list {
    display: flex;
    overflow-x: scroll;
  }

  &__description {
    margin: 10px;
  }

  &__details {
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

  &__name {
    margin: 6px 0;
  }

  &__title {
    @extend %section-title;
  }

  &__url {
    color: $white;
    font-size: 25px;
    margin: 10px;
    text-decoration: underline;
    transition: 0.2s ease-in;

    &:hover {
      color: $silver;
    }
  }
}
</style>
