<template>
  <div :id="$style.app">
    <h1>{{ title }}</h1>
    <!-- <TheButton @click="inctrement" outlined>Click me</TheButton> -->
    <!-- <DirectivesTest /> -->
    <StarRating :rating="4.5" />
  </div>
</template>

<script>
// import TheButton from './components/TheButton.vue'
// import DirectivesTest from './components/DirectivesTest.vue'
import StarRating from './components/StarRating.vue'

export default {
  name: 'App',
  components: {
    // TheButton,
    // DirectivesTest,
    StarRating
  },
  data() {
    return {
      amountOfClicks: 0
    }
  },
  computed: {
    title() {
      return `Amount of clicks ${this.amountOfClicks}`
    }
  },
  methods: {
    inctrement() {
      this.amountOfClicks += 1
    }
  }
}
</script>

<style module>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
