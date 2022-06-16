<template>
  <div class="setup">
    <img
      class="setup__image"
      src="https://via.placeholder.com/750x422"
      alt=""
    />
    <div class="setup__content">
      <h1 class="setup__title">What do I use</h1>
      <ul>
        <li v-for="item in setup" :key="item.name" class="setup__item">
          <span>{{ item.icon }} </span>
          <a :href="item.url" class="setup__item-url"> {{ item.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WhatDoIUse',
  data () {
    return {
      setup: [
        {
          icon: '💻',
          name: 'Laptop: MacBook Pro M1 13"',
          url: 'https://www.elgato.com/keylights/'
        },
        {
          icon: '🖥',
          name: 'Monitor: HUAWEI MateView GT 34',
          url: 'https://consumer.huawei.com/en/monitors/mateview-gt/'
        },
        {
          icon: '💡',
          name: 'Lighting: ElGato Key Light Air',
          url: 'https://www.elgato.com/en/key-light-air'
        },
        {
          icon: '💡',
          name: 'Lighting: ElGato Ring Light',
          url: 'https://www.elgato.com/en/ring-light'
        },
        {
          icon: '🎧',
          name: 'Headphones: Bose QuietComfort 35 II - Rose Gold',
          url: 'https://www.amazon.com/Bose-QuietComfort-Bluetooth-Headphones-Noise-Cancelling/dp/B07NXDPLJ9'
        },
        {
          icon: '🎤',
          name: 'Microphone: Blue YetiX',
          url: 'https://www.bluemic.com/en-us/products/yeti-x/'
        },
        {
          icon: '🎤',
          name: 'Microphone arm: Compass boom arm',
          url: 'https://www.bluemic.com/en-us/products/compass/'
        },
        {
          icon: '🎤',
          name: 'Microphone suspension mount: Blue Radius III',
          url: 'https://www.bluemic.com/en-us/accessories/'
        },
        {
          icon: '🎥',
          name: 'Camera: Elgato Facecam',
          url: 'https://www.elgato.com/en/facecam'
        },
        {
          icon: '🎥',
          name: 'Camera: Canon EOS M50',
          url: 'https://www.canon.es/cameras/eos-m50/'
        },
        {
          icon: '🎥',
          name: 'Camera mount: Elgato solid arm',
          url: 'https://www.elgato.com/en/solid-arm'
        },
        {
          icon: '📱',
          name: 'Streamdeck: Elgato stream deck MK2',
          url: 'https://www.elgato.com/en/stream-deck-mk2'
        },
        {
          icon: '🖱',
          name: 'Mouse: Apple magic mouse 2',
          url: 'https://www.apple.com/shop/product/MK2E3AM/A/magic-mouse-white-multi-touch-surface'
        },
        {
          icon: '⌨️',
          name: 'Keyboard: Magic Keyboard US English',
          url: 'https://www.apple.com/shop/product/MK2A3LL/A/magic-keyboard-us-english'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import '../scss/variables';
@import '../scss/mixins';
@import '../scss/typography';

.setup {
  padding: 60px;

  &__item {
    color: #eb5160;
    margin-bottom: 20px;

    &-url {
      color: #eb5160;
      text-decoration: underline;
    }
  }

  &__image {
    display: block;
    margin: 0 auto 20px;
  }

  &__title {
    @extend %section-title;
  }
}
</style>
