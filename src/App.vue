<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import WOW from 'wow.js/dist/wow.min'

export default {
  mounted () {
    new WOW().init()
  }
}
</script>
