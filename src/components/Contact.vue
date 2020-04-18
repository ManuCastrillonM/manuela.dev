<template>
  <section class="contact" id="contact">
    <h2 class="contact__title wow fadeIn">Contact</h2>
    <ul class="contact__list">
      <li v-for="item in social"
        :key="item.url"
        class="contact__item wow fadeIn">
        <a :href="item.url"><i :class="cssSocialClass(item.name)"></i></a>
      </li>
    </ul>
  </section>
</template>

<script>
import WOW from 'wow.js/dist/wow.min'

export default {
  data () {
    return {
      social: [{
        name: 'instagram',
        url: 'https://www.instagram.com/manucastrillonm'
      }, {
        name: 'twitter',
        url: 'https://www.twitter.com/manucastrillonm'
      }, {
        name: 'github',
        url: 'https://www.github.com/manucastrillonm'
      }, {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/manuelacastrillon'
      }, {
        name: 'medium',
        url: 'https://www.medium.com/@manucastrillonm'
      }, {
        name: 'youtube',
        url: 'https://www.youtube.com/channel/UC4LjWxfLOQlx2ciIu0KFtWQ'
      }]
    }
  },
  methods: {
    cssSocialClass (item) {
      return `contact__icon fab fa-${item}`
    }
  },
  mounted () {
    new WOW().init()
  }
}
</script>

<style lang="scss">
@import '../scss/variables';
@import '../scss/typography';

.contact {
  &__icon {
    color: $mandy;
    font-size: 22px;
  }

  &__item {
    display: inline-block;

    &:not(:last-child) {
      margin-right: 10px;
    }
  }

  &__title {
    @extend %section-title;
  }
}
</style>
