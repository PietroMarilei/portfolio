<script >
import { store } from './store';
import MainComponent from './components/MainComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import LoaderComponent from './components/LoaderComponent.vue';


export default {
  components: {
   
    MainComponent,
    FooterComponent,
    LoaderComponent,
  },
  data(){
    return {
      store,
      isload: false,
    }
  }, 
  methods: {

  },
  created() {
    setTimeout(() => {
      this.isload = true
    }, 1010);             
  },
  mounted() {
    // window.addEventListener('keyup', function (event) {
    //   console.log(event.keyCode);
    // });
  }
}
</script>

<template>
  <div class="noiseBg"></div>
  <Transition>
  <LoaderComponent key="1" v-if="isload == false"/>
  <div v-else key="2">
    <MainComponent/>
  </div>

  </Transition>


</template>

<style lang="scss">
  @import "./assets/scss/main.scss";
 @import "./assets/scss/partials/variables.scss";
  @import './assets/scss/partials/reset.scss';
  @import './assets/scss/partials/animations.scss';
  
  body {
    background-color: #010c16;
    color: rgb(255, 255, 255);
    margin: 0;
    overflow: hidden;
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

.v-enter-active,
.v-leave-active {
  transition: opacity 0.8s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
} 
</style>
