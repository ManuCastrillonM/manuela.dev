<template>
  <section class="about section" aria-label="about me">
    <div class="container">
      <div class="row">
        <h1
          class="section-title wow fadeIn"
          data-wow-duration="1s"
          :data-heading="title"
        >
          {{ title }}
        </h1>
      </div>
      <div class="row middle-xs">
        <div class="col-xs-offset-2 col-xs-8 col-sm-offset-0 col-sm-5 col-lg-offset-1 col-lg-3 wow zoomIn">
          <div class="row">
            <figure class="about__photo">
              <img src="../assets/images/about-photo.png" alt="profile photo">
            </figure>
          </div>
          <div class="about__info">
            <ul>
              <li>
                <span class="about__info-title">basic-info: {</span>
              </li>
              <li class="idented">
                <span class="about__info-title">name:</span> "Manuela Castrillón",
              </li>
              <li class="idented">
                <span class="about__info-title">age:</span> 23,
              </li>
              <li class="idented">
                <span class="about__info-title">country:</span> "Colombia",
              </li>
              <li class="idented">
                <span class="about__info-title">e-mail:</span> "soymanuela.castrillon@gmail.com"
              </li>
              <li>
                <span class="about__info-title">}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-xs-12 col-sm-offset-1 col-sm-6 wow zoomIn">
          <p class="about__bio">
            I'm a Software Engineering student at Universidad de Antioquia, co-organizer of Pioneras Developers & Codex UdeA, Vue Vixens Chapter Leader, Web Engineer at Huge & self-proclaimed Emoji Expert. <i class="em em-sports_medal"></i><br>
            I strongly believe we can build the world <i class="em em-earth_americas"></i> that we want and be the change that we want to see. <br>
            <span class="about__bio-span"><i class="em em-heartpulse"></i> My interests:</span> Diversity & Inclusion, Teach & Learn, Pizza & Buñuelos.
          </p>
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
      title: '<About me />'
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

.about {
  &__photo {
    position: relative;
    width: 100%;

    img {
      border-radius: 50%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      width: 100%;
    }

    &:after {
      content: '';
      display: block;
      padding-bottom: 100%;
    }
  }

  &__info {
    &-title {
      color: color('egg-blue');
      font-weight: bold;
    }

    .idented {
      word-break: break-word;
      margin-left: 20px;
    }
  }

  &__bio {
    line-height: 25px;
    text-align: justify;

    .em {
      width: 1em;
      height: 1em;
    }

    &-span {
      color: color('egg-blue');
      font-weight: 600;
    }
  }
}
</style>
