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
    </div>
    <div class="row">
      <div class="col-xs-offset-1 col-xs-10">
        <div class="contact__icons row center-xs">
          <div
            class="contact__icons-el col wow zoomIn"
            v-for="(item, index) in social"
            :key="index"
          >
          <a :href="item.link" target="_blank" class="contact__icons-link">
            <i
              class="fab fa-3x"
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
      title: '<Contact />',
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
      }, {
        icon: 'fa-youtube',
        link: 'https://www.youtube.com/channel/UC4LjWxfLOQlx2ciIu0KFtWQ'
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

  &__icons {
      padding: 50px 0;

      &-el {
        margin: 20px;
      }

      &-link {
        color: color('pink');
        transition: color 0.2s ease-in;
        text-shadow: 1px 1px 1px color('nevada');

        &:hover {
          color: color('salomie');
        }
      }
  }
}
</style>
