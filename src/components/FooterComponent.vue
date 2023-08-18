<script>
import { store } from '../store';

export default {
  data() {
    return {
      greeting: 'Hello World!',
      store,
    }
  },
  methods: {

  },
}
</script>

<template>
  <!-- footer template -->
  <footer>
    <!-- <div class="wrapper">
      <img id="slide" src="http://lorempixel.com/output/cats-q-c-100-100-4.jpg" />
    </div> -->
  </footer>
</template>

<style lang="scss" scoped>
footer {
  color: white;

  .wrapper {
    position: relative;
   
    width: 100px;
    height: 100px; 
    border: 1px solid black;
}

#slide {
    position: absolute;
    left: -100px;
    width: 100px;
    height: 100px;
    background: blue;
    animation: slide 0.5s forwards;
    animation-delay: 2s;
}

@keyframes slide {
    100% { left: 0; }
}
}
</style>