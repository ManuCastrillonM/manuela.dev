<template>
  <section class="resume" aria-label="resume">
    <div class="row wow bounceInDown">
      <h1
        class="section-title"
        data-wow-duration="1s"
        :data-heading="title"
      >
        {{ title }}
      </h1>
    </div>

    <div class="row">
      <div class="resume-timeline col-xs-offset-2 col-xs-8">
        <div
          class="resume-timeline-section"
          v-for="(listYear, index) in resume"
          :key="index"
        >
          <h3 class="resume-timeline-year">{{ listYear.year }}</h3>
          <ul class="row resume-timeline-list">
            <li
              class="resume-timeline-item wow zoomIn"
              v-for="(item, index) in listYear.content"
              :key="index"
            >
              <p class="resume-timeline-item-title">
                <i
                  class="em"
                  :class="item.icon"
                ></i>
                {{ item.title }}
              </p>
              <p class="resume-timeline-item-description">{{ item.description }}</p>
              <p class="resume-timeline-item-date">{{ item.date }}</p>
            </li>
          </ul>
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
      title: '<Resume />',
      resume: [ {
        year: '2018',
        content: [{
          date: 'January - currently',
          description: 'Huge',
          icon: 'em-female-technologist',
          link: 'https://www.hugeinc.com/',
          title: 'Web Engineer'
        },{
          date: 'January - currently',
          description: 'Co-organizer',
          icon: 'em-sparkling_heart',
          link: 'http:///www.pionerasdev.co',
          title: 'Pioneras Developers'
        }]
      },{
        year: '2017',
        content: [{
          date: 'November',
          description: 'Mentor',
          icon: 'em-woman-raising-hand',
          link: 'https://www.ngcolombia.com/',
          title: 'NgColombia'
        },{
          date: 'November',
          description: 'Mentor',
          icon: 'em-woman-raising-hand',
          link: 'http://ng-girls.org/NgColombia/',
          title: 'NgGirls'
        },{
          date: 'August',
          description: 'Volunteer',
          icon: 'em-woman-raising-hand',
          link: 'http://medellinup.co/women-edition/',
          title: 'Startup Weekend Women Edition'
        }]
      },{
        year: '2016',
        content: [{
          date: 'September',
          description: 'Competitor',
          icon: 'em-female-technologist',
          link: 'http://communities.techstars.com/colombia/medellin/startup-weekend/9735',
          title: 'Startup Weekend'
        },{
          date: 'January',
          description: 'Competitor',
          icon: 'em-female-technologist',
          link: 'https://globalgamejam.org/2016/games/elements-souls',
          title: 'Global Game Jam'
        }]
      },{
        year: '2015',
        content: [{
          date: 'August',
          description: 'Juventic (Google-Colnodo-CUN)',
          icon: 'em-female-student',
          link: '#',
          title: 'Media Content Design and Production'
        },{
          date: 'February - November',
          description: 'Competitor',
          icon: 'em-female-technologist',
          link: '#',
          title: 'Colombian Collegiate Programming League'
        },{
          date: 'February - December 2017',
          description: 'Universidad de Antioquia',
          icon: 'em-blue_book',
          link: '#',
          title: 'Administrative Manager'
        }]
      },{
        year: '2014',
        content: [{
          date: 'September - December',
          description: 'Cymetria Group S.A.S.',
          icon: 'em-female-student',
          link: '#',
          title: 'Visual Communication using Adobe Photoshop® CS6'
        },{
          date: 'July - July 2015',
          description: 'Universidad de Antioquia',
          icon: 'em-blue_book',
          link: '#',
          title: 'Teaching Assistant - Subject: Discrete Mathematics'
        }]
      },{
        year: '2013',
        content: [{
          date: 'March - Currently',
          description: 'Universidad de Antioquia',
          icon: 'em-female-student',
          link: '#',
          title: 'Software Engineering'
        }]
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
@import '~styles/mixins';
@import '~styles/functions';

.resume {
  &-timeline {
    position: relative;

    &:before {
      content: '';
      background: color('color-secondary');
      height: 100%;
      margin-left: 0;
      position: absolute;
      width: 5px;
      z-index: -1;
      border-radius: 50%;

      @include from('md') {
        margin-left: 50%;
      }
    }

    &-list {
      flex-direction: column;
    }

    &-year {
      background-color: color('color-secondary');
      border-radius: 8px;
      color: color('white');
      font-size: $font-xl;
      margin: 10px auto;
      padding: 5px 15px;
      text-align: center;
      width: fit-content;
      width: -moz-fit-content;
    }

    &-item {
      background-color: color('white');
      border: 2px solid color('color-accent');
      border-radius: 8px;
      margin: 20px;
      padding: 10px;
      position: relative;
      width: 80%;

      &::before {
        content: '';
        position: absolute;
        border-style: solid;
        top: 50%;
        width: 10px;
        height: 10px;
        transform: rotate(45deg);
        border-color: color('color-accent');
        background-color: color('white');
        left: -7px;
        border-width: 0 0 2px 2px;
      }

      @include from('md') {
        margin: 0;
        width: 40%;

        &:nth-child(even) {
          align-self: flex-end;

          &::before {
            left: -7px;
            border-width: 0 0 2px 2px;
          }
        }

        &:nth-child(odd) {
          align-self: flex-start;

          &::before {
            left: auto;
            right: -7px;
            border-width: 2px 2px 0 0;
          }
        }
      }

      &-title {
        color: color('color-accent');
        font-size: $font-lg;
        font-weight: 500;
        margin: 5px 0;

        .em {
          max-width: 20px;
        }
      }

      &-description {
        margin: 5px 0;
      }

      &-date {
        margin: 0;
        font-size: $font-sm;
        font-style: italic;
      }
    }
  }
}
</style>
