<template>
  <div>
  <v-app-bar>
  
  </v-app-bar>
<carousel>
<carousel-slide>
  <div class="card"></div>
</carousel-slide>
<carousel-slide>
<v-card>
<h1>Expériences</h1>
</v-card>
</carousel-slide>
<carousel-slide><v-card><h1>Formations</h1></v-card></carousel-slide>
<carousel-slide><v-card><h1>Compétences</h1></v-card></carousel-slide>
<carousel-slide><v-card><h1>Réalisations</h1></v-card></carousel-slide>
<carousel-slide><v-card><h1>Langues</h1></v-card></carousel-slide>
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
