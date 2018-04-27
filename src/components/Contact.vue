<template>
  <section class="contact" aria-label="contact">
    <div class="row">
      <h1
        class="wow bounceInDown section-title"
        data-wow-duration="1s"
        :data-heading="title"
      >
        {{ title }}
      </h1>
      <h2 class="color-secondary no-margin">I want to know more about you </h2>
    </div>
    <div class="row">
      <div class="col-xs-offset-1 col-xs-10">
        <div class="contact-icon-container row center-xs">
          <div
            class="contact-icon col wow zoomIn"
            v-for="(item, index) in social"
            :key="index"
          >
          <a :href="item.link" target="_blank">
            <i
              class="fa fa-3x"
              :class="item.icon"
              aria-hidden="true"
            >
            </i>
          </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import WOW from 'wow.js/dist/wow.min'

export default {
  data () {
    return {
      title: '<Contact me />',
      social: [{
        icon: 'fa-twitter',
        link: 'https://www.twitter.com/manucastrillonm'
      },{
        icon: 'fa-instagram',
        link: 'https://www.instagram.com/manucastrillonm'
      },{
        icon: 'fa-linkedin',
        link: 'https://www.linkedin.com/in/manuelacastrillon'
      },{
        icon: 'fa-github',
        link: 'https://www.github.com/manucastrillonm'
      }]
    }
  },
  mounted () {
    new WOW().init()
  }
}
</script>

<style lang="scss">
@import '~styles/variables';

.contact {
  &-icon {
    margin: 20px;

    &-container {
      padding: 50px 0;
    }

    &-fa {
      path {
        color: $color-accent;
      }
    }
  }
}
</style>
