<script>
import { store } from '../store';

export default {
    data() {
        return {
            store,
        }
    },
    methods: {

    },
}
</script>

<template>
    <img src="" alt="">
    <div class="container">
        <div class="row d-flex">
            <div class="leftUpper">
                Testo sopra sinistra
            </div>
            <div class="line">

            </div>
            <div class="imgWrapper">
                <img src="../assets/img/ezgif.com-crop .gif" alt="">
            </div>
        </div>
        <div class="row">
            <h1> Pietro Marilei 
            </h1>

        </div>
        <div class="row d-flex">
            <button @click="$emit('goLeft')"> back</button>
            <button @click="$emit('goRight')"> next</button>
            <button @click="$emit('goUp')"> up</button>
            <button @click="$emit('goDown')"> Down</button>

        </div>
    
    </div>
</template>

<style lang="scss" scoped>

.container {
    flex-shrink: 0;
    border: 2px solid rgb(130, 69, 162);
    
    // --------------
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // align-items: center;
    padding: 3rem 2rem;
    background-image: url(../assets/img/rectangle.png);
    background-position: center;
}
h1 {
    text-align: center;
}
.line {
    width: 100%;
    height: 1px;
    background-color: white;
}
.imgWrapper {
    width: 3rem;
}
</style>