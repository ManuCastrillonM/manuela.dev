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
          <i :class="cssSocialClass(item.name, item.type)"></i
        ></a>
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
          url: 'https://youtube.com/@ManuCastrillon'
        },
        {
          name: 'coffee',
          type: 'fas',
          url: 'https://www.buymeacoffee.com/manucastrillon'
        }
      ]
    }
  },
  methods: {
    cssSocialClass (item, type = 'fab') {
      return `contact__icon ${type} fa-${item}`
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
    color: $thunder;
    font-size: 28px;
    transition: 0.2s ease-in;

    &:hover {
      color: $silver;
    }
  }

  &__item {
    display: inline-block;
    transition: transform 0.1s ease-in;

    &:not(:last-child) {
      margin-right: 10px;
    }

    &:hover{
      transform: scale(1.05);
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
