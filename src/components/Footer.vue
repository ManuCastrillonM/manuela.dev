<template>
  <footer class="row footer">
    <div class="col-xs-offset-2 col-xs-8 col-md-offset-2 col-md-4">
      Made with <i class="em em-heartpulse"></i> by <a href="https://www.github.com/manucastrillonm">@manucastrillonm</a>
    </div>
    <div class="col-xs-offset-2 col-xs-8 col-md-offset-0 col-md-4">
      You can find the source code of this page on
      <font-awesome-icon
        :icon="githubIcon"
        size="1x"
        class="contact-icon-fa"
      />
      <a href="https://www.github.com/manucastrillonm/manucastrillonm.co">GitHub</a>
    </div>
  </footer>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import { faGithub } from '@fortawesome/fontawesome-free-brands'

export default {
  components: {
    FontAwesomeIcon
  },
  computed: {
    githubIcon () {
      return faGithub
    }
  }
}
</script>

<style lang="scss">
@import '~styles/variables';

.footer {
  border-top: 4px solid $color-primary;
  padding: 20px 0;

}
</style>
