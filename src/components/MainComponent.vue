<script>
import TestComp from './TestComp.vue';
import ThreeDCubeComponent from './ThreeDCubeComponent.vue';
import { store } from '../store';
import { vShow } from 'vue';
export default {
  components: {
    TestComp,
    ThreeDCubeComponent,
  },
  data() {
    return {
      store,
      animationClass: '',

      orizontalOffset: 0,
      verticalOffset: 0,
    }
  },
  methods: {
    goRight() {
      this.orizontalOffset = this.orizontalOffset - 100
      this.animationClass = 'goRight'

    },

     goLeft() {
      this.orizontalOffset = this.orizontalOffset + 100
      this.animationClass = 'goLeft'

    },

    goCenterFromRight() {
      this.orizontalOffset = 0
      this.animationClass = 'goCenterfromRight'
    },
    //why this bug ? ❌
     goCenterfromLeft() {
      this.orizontalOffset = 0
      this.animationClass = 'goCenterfromLeft'
    }
  },

  mounted() {

  }
}
</script>

<template>
  <!-- main template -->
  <main>
    <div class="mainContainer" :class="this.animationClass">
      <div class="topContainer">

        <div class="card">
          <TestComp />
        </div>

      </div>

      <div class="centerContainer ">


        <div class="card">
          
          <p>carta sinistra</p>
            <button @click=" goCenterFromLeft()"> back</button>
            <TestComp />
        </div>


        <div class="card">
          <p>carta centrale</p>
          <button @click=" goLeft()"> back</button>
          <TestComp />
          <button @click="goRight()"> next</button>
          <ThreeDCubeComponent/>
        </div>



        <div class="card">
          <TestComp />
            <button @click=" goCenterFromRight()"> back</button>


        </div>
      </div>

      <div class="bottomContainer">

        <div class="card">
          <TestComp />
        </div>

      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
p {
  padding: 1rem;
  cursor: pointer;
  background-color: blue;
}

.mainContainer {
  transform: translate(-100vw, -100vh);
  transition: all 1s ease-in-out;
 

}

.topContainer {
  transform: translate(100vw);
  display: flex;
  flex-wrap: nowrap;
}

.centerContainer {
  display: flex;
  flex-wrap: nowrap;
}

.bottomContainer {
  transform: translate(100vw);
  display: flex;
  flex-wrap: nowrap;
}

.card {
  height: 100vh;
  width: 100vw;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 3px dashed rgb(255, 0, 0);
  padding: 1rem;
}

</style>


