<script>
import { store } from '../store';
import * as THREE from 'three';

export default {
    data() {
        return {
            store,
            scene: new THREE.Scene(),
            camera: new THREE.PerspectiveCamera(75, window.innerWidth / window.innerWidth, 0.1, 1000 ),
            // render: new THREE.WebGLRenderer(
            //     {   
            //         // this selection may not work
            //         canvas: document.querySelector('bg') 

            //     })
        }
    },
    methods: {

    },
    created() {
        this.renderer.setPixelRatio(window.devicePixelRatio)
    },
    
}
</script>

<template>
    <p>Il compo c'é</p>
    <canvas id="bg">

    </canvas>
</template>

<style lang="scss" scoped>
canvas {
    position: fixed;
    top: 0;
    left: 0;
    background-color: red;
    height: 1000px;
    width: 100px;
}
</style>