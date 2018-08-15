<template>
  <div id="app">
    <hero />
    <main>
      <about />
      <quote />
      <resume />
      <skills />
      <contact />
    </main>
    <bottom />
  </div>
</template>

<script>
import About from './components/About'
import Bottom from './components/Footer'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Quote from './components/Quote'
import Resume from './components/Resume'
import Skills from './components/Skills'

export default {
  name: 'app',
  components: {
    About,
    Bottom,
    Contact,
    Hero,
    Navbar,
    Quote,
    Resume,
    Skills
  }
}
</script>
