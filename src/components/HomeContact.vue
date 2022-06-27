<template>
  <section class="contact" id="contact">
    <h2 class="contact__title wow fadeIn">{{ $t('common.contact') }}</h2>

    <ul class="contact__list">
      <li
        v-for="item in social"
        :key="item.url"
        class="contact__item wow fadeIn"
      >
        <a :href="item.url" target="_blank" rel="noopener noreferrer">
          <i :class="cssSocialClass(item.name)"></i
        ></a>
      </li>
      <li>
        <a
          href="https://www.buymeacoffee.com/manucastrillon"
          class="contact__coffee"
          target="_blank"
          ><img
            class="contact__coffee-img"
            src="https://cdn.buymeacoffee.com/buttons/v2/default-red.png"
            alt="Buy Me A Coffee"
        /></a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data () {
    return {
      social: [
        {
          name: 'instagram',
          url: 'https://www.instagram.com/manucastrillonm'
        },
        {
          name: 'twitter',
          url: 'https://www.twitter.com/manucastrillonm'
        },
        {
          name: 'github',
          url: 'https://www.github.com/manucastrillonm'
        },
        {
          name: 'linkedin',
          url: 'https://www.linkedin.com/in/manuelacastrillon'
        },
        {
          name: 'dev',
          url: 'https://dev.to/manucastrillonm'
        },
        {
          name: 'youtube',
          url: 'https://www.youtube.com/c/ManuCastrillon'
        }
      ]
    }
  },
  methods: {
    cssSocialClass (item) {
      return `contact__icon fab fa-${item}`
    }
  }
}
</script>

<style lang="scss">
@import '../scss/variables';
@import '../scss/typography';

.contact {
  &__coffee {
    &-img {
      height: 28px;
      width: 101px;
    }
  }

  &__icon {
    color: $mandy;
    font-size: 28px;
    transition: 0.2s ease-in;

    &:hover {
      color: $silver;
    }
  }

  &__item {
    display: inline-block;

    &:not(:last-child) {
      margin-right: 10px;
    }
  }

  &__list {
    align-items: center;
    display: flex;
    justify-content: flex-start;
  }

  &__title {
    @extend %section-title;
  }
}
</style>
