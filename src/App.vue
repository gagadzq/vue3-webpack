<template>
  <div>
    <div>
      <a @click="actived = 'home'" class="nav-link">home</a>
      <a @click="actived = 'about'" class="nav-link">about</a>
    </div>
    <Home v-if="actived === 'home'"/>
    <About v-if="actived === 'about'"/>
  </div>
</template>

<script >
import Home from './pages/home.vue'
import About from './pages/about.vue'
export default {
  components: {
    Home,
    About
  },
  data() {
    return {
      actived: 'home'
    }
  }
}
</script>

<style>
.nav-link {
  padding: 0 20px;
}
</style>