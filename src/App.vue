<script >
import { store } from './store';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent,
  },
  data(){
    return {
      store,
      //like to state management
    }
  }, 
  methods: {

  },
  mounted() {
    // window.addEventListener('keyup', function (event) {
    //   console.log(event.keyCode);
    // });
  }
}
</script>

<template>

  <!-- <HeaderComponent/> -->
<div class="noiseBg"></div>
<MainComponent/>

  <!-- <FooterComponent/> -->

</template>

<style lang="scss">
  @use "./assets/scss/partials/variables.scss" as *;
  @import "./assets/scss/main.scss";
  @import './assets/scss/partials/reset.scss';
  @import './assets/scss/partials/animations.scss';
  
  body {
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
    
  }
  body {
  background-color: #010c16;
  margin: 0;
  overflow-x: hidden;
}

.noiseBg {
  position: fixed;
  top: -50%;
  left: -50%;
  right: -50%;
  bottom: -50%;
  width: 200%;
  height: 200vh;
  background: transparent url('http://assets.iceable.com/img/noise-transparent.png') repeat 0 0;
  background-repeat: repeat;
  animation: bg-animation .2s infinite;
  opacity: .8;
  visibility: visible;
}

@keyframes bg-animation {
    0% { transform: translate(0,0) }
    10% { transform: translate(-5%,-5%) }
    20% { transform: translate(-10%,5%) }
    30% { transform: translate(5%,-10%) }
    40% { transform: translate(-5%,15%) }
    50% { transform: translate(-10%,5%) }
    60% { transform: translate(15%,0) }
    70% { transform: translate(0,10%) }
    80% { transform: translate(-15%,0) }
    90% { transform: translate(10%,5%) }
    100% { transform: translate(5%,0) }
}
  
</style>
