<template>
  <section class="contact" aria-label="contact">
    <div class="row">
      <h1
        class="wow fadeIn section-title"
        data-wow-duration="1s"
        :data-heading="title"
      >
        {{ title }}
      </h1>
      <h2 class="no-margin">I want to know more about you </h2>
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
      }, {
        icon: 'fa-instagram',
        link: 'https://www.instagram.com/manucastrillonm'
      }, {
        icon: 'fa-linkedin',
        link: 'https://www.linkedin.com/in/manuelacastrillon'
      }, {
        icon: 'fa-github',
        link: 'https://www.github.com/manucastrillonm'
      }, {
        icon: 'fa-medium',
        link: 'https://medium.com/@ManuCastrillonM'
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
@import '~styles/functions';

.contact {
  &-icon {
    margin: 20px;

    .fa {
      transition: color 0.4s ease-in;
    }

    &:hover {
      .fa {
        color: color('camelot');
      }
    }

    &-container {
      padding: 50px 0;
    }

    &-fa {
      path {
        color: color('jon');
      }
    }
  }
}
</style>
