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
    <div class="wrapper">
        <button> back</button>
        <img src="../assets/img/giphy.gif" alt="">
        <button>Next</button>
    </div>
</template>

<style lang="scss" scoped>

.wrapper {
    border: 2px dashed red;
   flex-shrink: 0;
   width: 100vw;
}

</style>