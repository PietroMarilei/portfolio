<script>
import TestComp from './TestComp.vue';
import { store } from '../store';
import { vShow } from 'vue';
export default {
  components: {
    TestComp,
  },
  data() {
    return {
      store,
      animationClass: '',

      orizontalOffset: 0,
      verticalOffset: 0,

      testColor: 'red'

    }
  },
  methods: {
    goRight() {
      this.orizontalOffset = this.orizontalOffset - 100
      console.log('this.orizontalOffset', this.orizontalOffset);
      this.animationClass = 'goRight'

    },

    //  goLeft() {
    //   this.orizontalOffset = this.orizontalOffset + 100
    //   console.log('this.orizontalOffset', this.orizontalOffset);
    //   this.animationClass = 'animationRight'

    // },

    goCenterFromRight() {
      this.orizontalOffset = 0
      console.log('this.orizontalOffset', this.orizontalOffset);
      this.animationClass = 'goCenterfromRight'
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
          <TestComp />
          <button @click=" goCenterFromRight()"> back</button>
        </div>


        <div class="card">
          <p>carta centrale</p>
          <button @click=" goCenterFromRight()"> back</button>
          <TestComp />
          <button @click="goRight()"> next</button>
        </div>



        <div class="card">
          <button @click=" goCenterFromRight()"> back</button>
          <TestComp />


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
  background-color: v-bind(testColor);

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


