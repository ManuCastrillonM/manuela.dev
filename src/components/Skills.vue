<template>
  <section class="skills section" aria-label="skills">
    <div class="row">
      <h1
        class="wow bounceInDown section-title"
        data-wow-duration="1s"
        :data-heading="title"
      >
        {{ title }}
      </h1>
    </div>
    <div class="row">
      <div class="col-xs-offset-1 col-xs-10 col-md-offset-2 col-md-8">
        <div class="row">
          <div
            class="col-xs-12 col-md-4 center-xs wow zoomIn"
            v-for="(list, index) in skillsList"
            :key="index"
            :data-wow-delay="animationDelay(index)"
          >
            <h3 class="skills-title">{{ list.title }}</h3>
            <ul>
              <li
                class="skills-item"
                v-for="(item, index) in list.list"
                :key="index"
              >
                <span><i class="em em-star2"></i></span>{{ item }}
              </li>
            </ul>
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
      title: '<Skills />',
      skillsList: [{
        title: 'Web Technologies',
        list: ['HTML5', 'CSS3', 'SASS', 'Angular', 'Vue']
      },{
        title: 'Programming Languages',
        list: ['Java','Javascript','C#'],
      },{
        title: 'Other technologies',
        list: ['SQL', 'Android']
      }],
    }
  },
  mounted () {
    new WOW().init()
  },
  methods: {
    animationDelay(sec) {
      return `${sec*0.3}s`
    }
  }
}
</script>

<style lang="scss">
.skills {
  &-item {
    font-size: 16px;
    line-height: 35px;
  }
}
</style>
