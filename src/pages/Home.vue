<template>
  <div>
    <navbar theme="light"/>
    <hero />
    <main>
      <about />
      <!-- <quote /> -->
      <contact />
    </main>
  </div>
</template>

<script>
import About from '../components/About'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
// import Quote from '../components/Quote'

export default {
  name: 'home-page',
  components: {
    About,
    Contact,
    Hero,
    Navbar
    // Quote
  }
}
</script>
