<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <BtnAll>Click me</BtnAll>
    <TheTitle></TheTitle>
  </div>
</template>

<script>
import BtnAll from './components/Button'
import TheTitle from './components/TheTitle.vue'

export default {
  name: 'App',
  components: {
    BtnAll,
    TheTitle
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
