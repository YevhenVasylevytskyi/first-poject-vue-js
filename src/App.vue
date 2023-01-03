<template>
  <div :id="$style.app">
    <!-- <h1>{{ title }}</h1> -->
    <!-- <TheButton @click="inctrement" outlined>Click me</TheButton> -->
    <!-- <DirectivesTest /> -->
    <!-- <StarRating :rating="4.5" /> -->
    <!-- <ApartmentsItem 
      :descr="apartment.descr"
      :price="apartment.price"
      :rating="apartment.rating"
      imgSrc="https://cf.bstatic.com/xdata/images/hotel/max1024x768/293128008.jpg?k=a3299ec5f562389318a041915c24522ce601198b490deaa782077eb392a35898&o=&hp=1"
    /> -->
    <ApartmentsList 
    :items="apartments"/>
  </div>
</template>

<script>
// import TheButton from './components/TheButton.vue'
// import DirectivesTest from './components/DirectivesTest.vue'
// import StarRating from './components/StarRating.vue'
// import ApartmentsItem from './components/apartment/ApartmentsItem.vue'
import ApartmentsList from './components/apartment/ApartmentsList.vue'
import apartments from './components/apartment/apartments'

export default {
  name: 'App',
  components: {
    ApartmentsList,
    // ApartmentsItem
    // TheButton,
    // DirectivesTest,
    // StarRating
  },
  data() {
    return {
      apartments,
      apartment: {
        id: '5f689a2c09b16000e9a2f47b',
        title: 'Delectus et iste.',
        imgUrl: '/img/apartments/apartment-1.jpg',
        descr: 'Debitis similique unde et eligendi sapiente in iure blanditiis distinctio. Cum nihil temporibus qui quam aut. Nesciunt qui eveniet eum quam voluptate numquam.',
        rating: 3,
        price: 1667,
        location: {
          city: 'Dnipro',
        },
        owner: {
          name: 'Bobbi',
          phone: '582-740-2926',
          email: 'Pete_Carter53@hotmail.com',
        }
        //     amountOfClicks: 0
      }
    }
  },
  // computed: {
  //   title() {
  //     return `Amount of clicks ${this.amountOfClicks}`
  //   }
  // },
  // methods: {
  //   inctrement() {
  //     this.amountOfClicks += 1
  //   }
  // }
}
</script>

<style module>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
