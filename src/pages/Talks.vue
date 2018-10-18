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

        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
  name: 'talks-page',
  data() {
    return {
      title: 'Talks'
    }
  },
  components: {
    Navbar
  }
}
</script>
