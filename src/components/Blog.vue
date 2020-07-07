<template>
  <section class="blog" id="blog">
    <h2 class="blog__title wow fadeIn">Blog</h2>
    <ul class="blog__list">
      <li v-for="article in articlesFormatted"
        :key="article.title"
        class="blog__item wow fadeIn">
        <span class="blog__date">{{ article.date }}</span>
        <h3 class="blog__name">
          <a :href="article.url" target="blank">{{ article.title }}</a>
        </h3>
      </li>
    </ul>
    <a class="blog__read-more" href="https://dev.to/manucastrillonm">Read more</a>
  </section>
</template>

<script>

export default {
  data () {
    return {
      articles: []
    }
  },
  async mounted () {
    const devUrl = 'https://dev.to/api/articles?username=manucastrillonm'

    const response = await fetch(devUrl)

    if (response.ok) {
      this.articles = await response.json()
    }
  },
  computed: {
    articlesFormatted () {
      return this.articles.slice(0, 3).map(item => {
        const date = new Date(item.created_at)

        return {
          title: item.title,
          date: date.toDateString(),
          url: item.url
        }
      })
    }
  }
}
</script>

<style lang="scss">
@import '../scss/variables';
@import '../scss/mixins';
@import '../scss/typography';

.blog {
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
      background: $mandy;
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
