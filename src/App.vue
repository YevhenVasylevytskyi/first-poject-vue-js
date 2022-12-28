<template>
  <div id="app">
    <TheButton>Click me</TheButton>
  </div>
</template>

<script>
import TheButton from './components/TheButton.vue'

export default {
  name: 'App',
  components: {
    TheButton
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
