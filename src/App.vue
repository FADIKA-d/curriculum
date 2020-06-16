<template>
  <div>
<carousel>
<carousel-slide>
  <div class="card"></div>
</carousel-slide>
<carousel-slide>Expériences</carousel-slide>
<carousel-slide>Formations</carousel-slide>
<carousel-slide>Compétences</carousel-slide>
<carousel-slide>Réalisations</carousel-slide>
<carousel-slide>Langues</carousel-slide>
</carousel>

  </div>
</template>

<script>
import Carousel from './components/carousel/Carousel'
import CarouselSlide from './components/carousel/CarouselSlide'

export default {
  data () {
   
  },
  components: {
    Carousel,
    CarouselSlide
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
