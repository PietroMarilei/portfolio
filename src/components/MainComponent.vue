<script>
import TestComp from './TestComp.vue';
import { store } from '../store';
import { vShow } from 'vue';
import HomeComp from './HomeComp.vue';
export default {
  components: {
    TestComp,
    HomeComp,
  },
  data() {
    return {
      store,
      animationClass: '',

    }
  },
  methods: {
    goUp() {
      console.log('goUp');
      this.animationClass = 'goUp'
    },
    goDown() {
      console.log('goDown');
      this.animationClass = 'goDown'

    },
    goRight() {
      console.log('goRight');
      this.animationClass = 'goRight'
    },
    goLeft() {
      console.log('goLeft');
      this.animationClass = 'goLeft'
    },
// -----------------------------------------
    goCenterFromRight() {
      console.log('goCenterFromRight');
      this.animationClass = 'goCenterfromRight'
    },

    goCenterfromLeft() {
      console.log('goCenterfromLeft');
      this.animationClass = 'goCenterfromLeft'
    },
    goCenterfromDown() {
      console.log('goCenterfromDown');
      this.animationClass = 'goCenterfromDown'
    },
    goCenterfromUp() {
      console.log('goCenterfromUp');
      this.animationClass = 'goCenterfromUp'
    },
  },

  mounted() {

  }
}
</script>

<template>
  <!-- main template -->
  <main>
    <div class="mainWrapper">
      <div class="mainContainer" :class="this.animationClass">
        <div class="topContainer">
  
          <div class="card">
            <p>carta sopra</p>
            <TestComp />
            <button @click="goCenterfromUp()"> Down</button>
          </div>
  
        </div>
  
        <div class="centerContainer ">
          <div class="card">
            <TestComp />
            <button @click=" goCenterfromLeft()"> back</button>
          </div>
  
  
          <div class="card">
            <p>carta centrale</p>
            <button @click=" goLeft()"> back</button>

            <HomeComp/>
            
            <TestComp />
            <button @click="goRight()"> next</button>
  
            <button @click="goUp()"> up</button>
            <button @click="goDown()"> Down</button>
          </div>
  
          <div class="card">
            <button @click=" goCenterFromRight()"> back</button>
            <TestComp />
          </div>
        </div>
  
        <div class="bottomContainer">
  
          <div class="card">
            <p>carta sotto</p>
            <TestComp />
            <button @click="goCenterfromDown()"> up</button>
          </div>
  
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  position: relative;
}

p {
  padding: 1rem;
  cursor: pointer;
  background-color: blue;
}
.mainWrapper {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
.mainContainer {
  transform: translate(-100vw, -100vh);
  // position: absolute;
  // top: -100vh;
  // left: -100vw;
  transition: all 1s ease-in-out;
  // overflow: hidden;

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