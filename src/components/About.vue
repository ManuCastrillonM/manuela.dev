<template>
  <section class="about section" aria-label="about me">
    <div class="row wow bounceInDown">
      <h1
        class="section-title"
        :data-heading="title"
      >
        {{ title }}
      </h1>
    </div>
    <div class="about-container row middle-xs">
      <div class="col-xs-offset-2 col-xs-8 col-sm-offset-0 col-sm-5 col-lg-offset-1 col-lg-3 about-container-group wow zoomIn">
        <div class="row center-xs">
          <figure class="about-container-photo">
            <img src="../assets/images/about-photo.jpg" alt="profile photo">
          </figure>
        </div>
        <div class="about-container-info">
          <ul>
            <li>
              <span class="info-title">basic-info {</span>
            </li>
            <li class="idented">
              <span class="info-title">name:</span> "Manuela Castrillón",
            </li>
            <li class="idented">
              <span class="info-title">age:</span> 22,
            </li>
            <li class="idented">
              <span class="info-title">country:</span> "Colombia",
            </li>
            <li class="idented">
              <span class="info-title">e-mail:</span> "soymanuela.castrillon@gmail.com"
            </li>
            <li>
              <span class="info-title">}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="col-xs-12 col-sm-offset-1 col-sm-6 wow zoomIn">
        <p class="about-bio">
          I'm Software Engineering student at Universidad de Antioquia , Web Engineer at Huge, passionate coder & self proclaimed Emoji Expert. <i class="em em-sports_medal"></i><br>
          I strongly believe we can build the world <i class="em em-earth_americas"></i> that we want and be the change that we want to see. <br>
          <span class="about-span"><i class="em em-heartpulse"></i> My interests:</span> Diversity & Inclusion, Teach & Learn, Pizza & Buñuelos.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import WOW from 'wow.js/dist/wow.min'

export default {
  data () {
    return {
      title: '<About me />',
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

.about-container {
  &-photo {
    width: 70%;

    @include from ('md') {
      width: 50%;
    }

    img {
      border-radius: 50%;
    }
  }

  &-info {
    .info-title {
      color: color('color-secondary');
      font-weight: bold;
    }

    .idented {
      word-break: break-word;
      margin-left: 20px;
    }
  }

  .about {
    &-bio {
    line-height: 25px;
    text-align: justify;

      .em {
        width: 1em;
        height: 1em;
      }
    }

    &-span {
      color: color('color-secondary');
      font-weight: 600;
    }
  }
}
</style>
