<script>
import BioComp from './BioComp.vue';
import TestComp from './TestComp.vue';
import { store } from '../store';
export default {
  components: {
    BioComp,
    TestComp,
  },
  data() {
    return {
      store,
      slideLeft: 0,
      slideUp: false,
    }
  },
  methods: {
   
  },
}
</script>

<template>
  <!-- main template -->
  <main>

    <div class="carousel ">


      <TestComp />

      <TestComp />

      <TestComp />

      <TestComp />


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


.carousel {
  display: flex;
   display: flex;
    flex-wrap: nowrap;
}

.card {
  height: 100vh;
  width: 100vw;
  flex-shrink: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px dashed red;

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

// sine here
</style>