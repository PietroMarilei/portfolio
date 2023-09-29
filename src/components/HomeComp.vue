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
    <div class="container">
        <h1> homepage</h1>
        <img src="../assets/img/giphy.gif" alt="">
        <button @click="$emit('goLeft')"> back</button>
        <button @click="$emit('goRight')"> next</button>
        <button @click="$emit('goUp')"> up</button>
        <button @click="$emit('goDown')"> Down</button>

    </div>
</template>

<style lang="scss" scoped>
.container {
    flex-shrink: 0;
    border: 3px dashed rgb(0, 255, 30);
    // --------------
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
}
</style>