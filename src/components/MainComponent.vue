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
      animationClass: '',

      orizontalOffset: 0 ,
      verticalOffset: 0,

      color: 'red'
      
    }
  },
  methods: {
    goRight(){ 
      this.orizontalOffset = this.orizontalOffset + 100
      console.log('this.orizontalOffset',this.orizontalOffset);
      this.animationClass = 'animationLeft'

    },

     goLeft() {
      this.orizontalOffset = this.orizontalOffset - 100
      console.log('this.orizontalOffset', this.orizontalOffset);
      this.animationClass = 'animationRight'

    }
  },
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
        </div>
        <div class="card" >
          <p>carta centrale</p>
          
          <button @click="this.left--"> back</button>
          <TestComp />
          <button @click=" goRight()"> next</button>
        </div>
        <div class="card">
           <button @click=" goLeft(), console.log((this.left))"> back</button>
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

<style lang="css" scoped>

main {
  transform: translate(-100vw,-100vh);
  transition: all 1s ease-in-out;
  color: aliceblue;
  background-color: v-bind('color');
}

p {
  padding: 1rem;
  cursor: pointer;
  background-color: blue;
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
  border: 3px dashed red;

  padding: 1rem;

}




</style>


