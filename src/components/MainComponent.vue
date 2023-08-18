<script>
import BioComp from './BioComp.vue';
import { store } from '../store';
export default {
  components: {
    BioComp,
  },
  data() {
    return {
      store,
      slideLeft: 0,
      slideUp: false,
    }
  },
  methods: {
    slideConditions() {
     if (this.slideLeft == 0) {
      return ''
     } else if (this.slideLeft > 0 && this.slideLeft % 2 != 0) {
      return 'animationLeft'
     } else if (this.slideLeft > 0 && this.slideLeft % 2 == 0) {
      return 'animationRight'
     }
    }
  },
}
</script>

<template>
  <!-- main template -->
  <main>
    <div class="wrapper" >
      <div class="carousel " :class="this.slideUp == true ? 'animationFade' : ''">
       
        <div class="card" 
        :class="slideConditions()">
          <div class="centerCont">
            <img id="sineGif" src="../assets/img/color_sinewave_arrow.gif" alt="sineGif">
            <p @click="this.slideLeft ++; console.log(this.slideLeft)">Forward</p>
          </div>
        </div>
        <div class="card" 
        :class="slideConditions()">
          <button @click="this.slideLeft ++; console.log(this.slideLeft)"> back</button>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias magnam cupiditate placeat quas rem, non delectus, doloribus asperiores praesentium voluptatem adipisci voluptatum similique blanditiis nam porro id ipsa beatae ratione.</p>
        </div>
      </div>

      <!-- lower section -->
      <div class="vertical " :class="this.slideUp == true ? 'animationUp' : '' ">
        <button @click="this.slideUp = !this.slideUp; console.log(this.slideUp)">up</button>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni dolores voluptates totam, a ducimus quos optio veniam, itaque quaerat culpa quisquam, ullam cum deserunt facilis ipsam unde cupiditate. Alias, numquam.
          
        </p>
      </div>
      <!-- <button>next</button>-->
    </div>

  </main>
</template>

<style lang="scss" scoped>
main {
  height: 80vh;
  transition: all 1s ease-in-out;
}

p {
  padding: 1rem;
  cursor: pointer;
}

.wrapper {
  width: 100vw;
  padding: 1rem;
}

.carousel {
  overflow-x: hidden;
  display: flex;
}

.card {
  height: 80vh;
  width: 100vw;
  flex-shrink: 0;
}

#sineGif {
  max-width: 90vw;
  max-height: 80vh;
}

.animationLeft {
  animation: animationLeft 1s ease-in-out forwards;
}

@keyframes animationLeft {

  100% {
    translate: -100vw 0;
  }
}

.animationRight {
  animation: animationRight 1s ease-in-out forwards;
}

@keyframes animationRight {
  0% {
    translate: -100vh 0;
  }
  100% {
    translate: 0 0;
  }
}

.animationUp {
  animation: animationUp 1s ease-in-out forwards;
}

@keyframes animationUp {
  100% {
    translate: 0 -80vh;
  }
}

.animationFade {
  animation: animationFade 1s ease-in-out forwards;
}

@keyframes animationFade {
  100% {
    opacity: 0%;
  }
}

.animationRev {
  animation-direction: reverse;
}

.centerCont {
  display: flex;
  height: 100%;
  align-items: center;


  img {
    width: 90vw;
  }
}

// sine here</style>