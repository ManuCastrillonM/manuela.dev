<template>
  <div id="app">
    <router-view></router-view>
    <bottom />
  </div>
</template>

<script>
import Bottom from './components/Footer'

export default {
  name: 'app',
  components: {
    Bottom
  }
}
</script>
