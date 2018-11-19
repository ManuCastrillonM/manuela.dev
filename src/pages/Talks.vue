<template>
  <div>
    <navbar theme="dark" />
    <section class="talks">
      <div class="row">
        <h1
          class="section-title wow fadeIn"
          data-wow-duration="1s"
          :data-heading="title"
        >
          {{ title }}
        </h1>
      </div>
      <div>
        <ul>
          <li
            class="talk"
            v-for="talk in talks"
            :key="talk.name"
          >
            • <a :href="talk.link" target="_blank">{{talk.title}}</a> <br>
            <span class="talk-description">{{talk.description}}</span>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import talks from '../assets/data/talks'

export default {
  name: 'talks-page',
  data() {
    return {
      title: 'Talks',
      talks
    }
  },
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
@import '../scss/variables';

.talk {
  font-size: $font-lg;
  padding-bottom: 15px;

  &-description {
    margin-left: 20px;
  }
}
</style>
