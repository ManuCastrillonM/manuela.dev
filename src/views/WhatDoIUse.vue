<template>
  <div class="setup">
    <img
      class="setup__image"
      src="../assets/images/setup.jpg"
      alt="setup picture"
    />
    <div class="setup__content">
      <h1 class="setup__title">What do I use</h1>

      <div v-for="item in setup" :key="item.title" class="setup__section">
        <div class="setup__item-title">
          <div class="setup__item-icon">
            <span>{{ item.icon }}</span>
          </div>
          <h2 class="setup__subtitle">
            {{ item.title }}
          </h2>
        </div>

        <ul class="setup__item-list">
          <li
            v-for="subitem in item.items"
            :key="subitem.name"
            class="setup__item-content"
          >
            <a
              v-if="subitem.url"
              :href="subitem.url"
              class="setup__item-link"
              >{{ subitem.name }}</a
            >
            <p v-else class="setup__item-text">{{ subitem.name }}</p>
          </li>
        </ul>
      </div>
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
          title: 'Laptop',
          items: [
            {
              name: 'MacBook Pro M1 13"'
            }
          ]
        },
        {
          icon: '🖥',
          title: 'Monitor',
          items: [
            {
              name: 'HUAWEI MateView GT 34',
              url: 'https://www.huawei.com/en/products/mateview-gt-34'
            }
          ]
        },

        {
          icon: '💡',
          title: 'Lighting',
          items: [
            {
              name: 'Elgato Key Light Air',
              url: 'https://www.elgato.com/en/key-light-air'
            },
            {
              name: ' Elgato Ring Light',
              url: 'https://www.elgato.com/en/ring-light'
            }
          ]
        },
        {
          icon: '🎤',
          title: 'Microphone',
          items: [
            {
              name: 'Blue YetiX',
              url: 'https://www.bluemic.com/en-us/products/yeti-x/'
            },
            {
              name: 'arm: Compass boom arm',
              url: 'https://www.bluemic.com/en-us/products/compass/'
            },
            {
              name: 'suspension mount: Blue Radius III',
              url: 'https://www.bluemic.com/en-us/accessories/'
            }
          ]
        },
        {
          icon: '🎥',
          title: 'Camera',
          items: [
            {
              name: 'Elgato Facecam',
              url: 'https://www.elgato.com/en/facecam'
            },
            {
              name: 'Canon EOS M50',
              url: 'https://www.canon.es/cameras/eos-m50/'
            },
            {
              name: 'mount: Elgato solid arm',
              url: 'https://www.elgato.com/en/solid-arm'
            }
          ]
        },
        {
          icon: '🎧',
          title: 'Other',
          items: [
            {
              name: 'Streamdeck: Elgato stream deck MK2',
              url: 'https://www.elgato.com/en/stream-deck-mk2'
            },
            {
              name: 'Mouse: Apple magic mouse 2',
              url: 'https://www.apple.com/shop/product/MK2E3AM/A/magic-mouse-white-multi-touch-surface'
            },
            {
              name: 'Keyboard: Magic Keyboard US English',
              url: 'https://www.apple.com/shop/product/MK2A3LL/A/magic-keyboard-us-english'
            },
            {
              name: 'Headphones: Bose QuietComfort 35 II - Rose Gold',
              url: 'https://www.amazon.com/Bose-QuietComfort-Bluetooth-Headphones-Noise-Cancelling/dp/B07NXDPLJ9'
            }
          ]
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
  &__content {
    padding: 20px;

    @include from('md') {
      padding: 60px;
    }
  }

  &__item {
    &-icon {
      align-items: center;
      background: linear-gradient(to bottom right, $thunder 40%, #fdc9c9);
      border-radius: 0 50% 50%;
      display: flex;
      height: 50px;
      justify-content: center;
      margin-right: 8px;
      width: 50px;
    }

    &-list {
      margin-left: 40px;
    }

    &-link,
    &-text {
      margin: 0 0 8px;
    }

    &-link {
      color: $black;
      text-decoration: underline;
    }

    &-title {
      align-items: center;
      color: $thunder;
      display: flex;
      font-size: 16px;
      margin-bottom: 10px;
    }
  }

  &__image {
    display: block;
    margin: 0 auto;
    max-width: 900px;
  }

  &__section {
    margin-bottom: 30px;
  }

  &__subtitle {
    letter-spacing: 2.5px;
    text-transform: lowercase;
  }

  &__title {
    @extend %section-title;
    margin-bottom: 40px;
  }
}
</style>
