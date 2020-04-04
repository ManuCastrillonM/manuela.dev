<template>
  <section class="about" id="about">
    <h2 class="about__title wow fadeIn">About</h2>
    <div class="about__container wow fadeIn">
      <p class="about__description">
        I'm a Web Engineer focused on building cool stuff using JavaScript.
        I'm part of the GitHub Campus Experts program, where I help my classmates
        learn about development and modern web technologies.<br/>
        Community leader, currently co-organizing GitConfCO and Vue Vixens CO.
        Founder and supporter of Codex UdeA.<br/>
        I dream with a world where everyone can have the same opportunities to access education.<br/>
        <b>My interests:</b> Diversity & Inclusion, Teach & Learn, Pizza & Buñuelos.</p>
      <ul class="about__info">
        <li class="about__info-item">
          <span class="about__info-title">Name</span><br/>
          Manuela Castrillón
        </li>
        <li class="about__info-item">
          <span class="about__info-title">Email</span><br/>
          soymanuela.castrillon@gmail.com
        </li>
        <li class="about__info-item">
          <span class="about__info-title">Location</span><br/>
          Medellín - Colombia
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import WOW from 'wow.js/dist/wow.min'

export default {
  mounted () {
    new WOW().init()
  }
}
</script>

<style lang="scss">
@import '../scss/variables';
@import '../scss/mixins';
@import '../scss/typography';

.about {
  &__container {
    display: flex;
    flex-direction: column;

    @include from('lg') {
      flex-direction: row;
      transform: translateX(80px);
    }
  }

  &__description {
    font-size: 16px;
    line-height: 22px;

    @include from('lg') {
      padding-right: 20px;
      width: 65%;
    }
  }

  &__info {
    background: $alizarin-crimson;
    color: $white;
    margin: 0;
    padding: 30px 20px;

    @include from('lg') {
      width: 35%;
    }
  }

  &__info-item {
    word-break: break-word;

    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  &__info-title {
    font-size: 11px;
    text-transform: uppercase;
  }

  &__title {
    @extend %section-title;
  }
}
</style>
