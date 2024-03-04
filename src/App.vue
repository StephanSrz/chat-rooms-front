<template>
  <NavBar :userLog="false" />
  <router-view/>
</template>

<script>
import NavBar from './components/head/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
  }
}
</script>

<style>
#app {
  background-color: #35374B;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>

