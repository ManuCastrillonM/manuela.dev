<template>
  <section class="about section">
    <div class="row wow bounceInDown">
      <h1
        class="section-title"
        :data-heading="title"
      >
        {{ title }}
      </h1>
    </div>
    <div class="about-container row middle-xs">
      <div class="col-xs-offset-2 col-xs-8 col-sm-offset-0 col-sm-5 col-lg-offset-1 col-lg-3 about-container-group">
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
              <span class="info-title">age:</span> 21,
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

      <div class="col-xs-12 col-sm-offset-1 col-sm-6">
        <p>Proident ullamco proident exercitation laborum adipisicing mollit adipisicing non et ea excepteur proident dolor. Tempor culpa ullamco adipisicing ex pariatur laborum et irure. Enim Lorem aliquip occaecat sunt enim et nulla cupidatat magna minim et pariatur id. Enim sint proident pariatur reprehenderit consequat qui consectetur est consectetur duis occaecat irure sunt. Enim consequat irure tempor irure ut anim exercitation est duis quis dolore. Consequat officia anim enim fugiat laboris veniam.</p>
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
      color: $color-accent;
      font-weight: bold;
    }

    .idented {
      word-break: break-word;
      margin-left: 20px;
    }
  }
}
</style>
