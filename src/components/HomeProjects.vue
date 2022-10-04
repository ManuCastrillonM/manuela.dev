<template>
  <section class="projects" id="projects">
    <h2 class="projects__title wow fadeIn">{{ $t('common.projects') }}</h2>
    <div class="projects__list">
      <div v-for="item in projects" :key="item.name" class="projects__item">
        <div
          :style="{ backgroundImage: 'url(' + getImage(item.image) + ')' }"
          class="projects__image"
        />
        <p class="projects__name">
          {{ item.name }}
        </p>
        <div class="projects__details">
          <span class="projects__description">{{ item.description }}</span>
          <div>
            <a :href="item.url" target="blank" class="projects__url">
              <i class="fas fa-globe"></i>
            </a>
            <a :href="item.repoUrl" target="blank" class="projects__url">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import projects from '@/assets/data/projects.js'

export default {
  data () {
    return {
      projects
    }
  },
  methods: {
    getImage (element) {
      // eslint-disable-next-line global-require, import/no-dynamic-require
      return require(`../assets/images/projects/${element}`)
    }
  }
}
</script>

<style lang="scss">
@import '../scss/variables';
@import '../scss/mixins';
@import '../scss/typography';

.projects {
  &__image {
    background-position: center;
    background-size: cover;
    border-radius: 4px 4px 0 0;
    width: 250px;
    height: 0;
    padding-top: 56.25%;
  }

  &__item {
    color: $white;
    font-weight: 700;
    position: relative;
    text-align: center;

    &:not(:first-child) {
      margin-left: 15px;
    }

    &:hover {
      .projects__details {
        height: 100%;
        padding: 10px;
      }
    }
  }

  &__list {
    display: flex;
    overflow-x: scroll;
  }

  &__description {
    margin: 10px;
  }

  &__details {
    align-items: center;
    background-color: $mandy;
    border-radius: 4px;
    bottom: 0;
    color: $white;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    height: 0;
    justify-content: center;
    overflow: hidden;
    position: absolute;
    transition: all 0.2s ease-in;
    width: 100%;
  }

  &__name {
    background: $mandy;
    border-radius: 0 0 4px 4px;
    margin: 0;
    padding: 4px 6px;
  }

  &__title {
    @extend %section-title;
  }

  &__url {
    color: $white;
    font-size: 25px;
    margin: 10px;
    text-decoration: underline;
    transition: 0.2s ease-in;

    &:hover {
      color: $silver;
    }
  }
}
</style>
