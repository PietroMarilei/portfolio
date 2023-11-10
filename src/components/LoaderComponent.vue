<script>
export default {
    data() {
        return {
        }
    },
    methods: {

    },
}
</script>

<template>
    <div class="my_loader">

        <img src="../assets/img/loader.gif" alt="">
    </div>
</template>

<style lang="scss" scoped>
.my_loader {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    img {
        width: 500px;
        border-radius: 10px;
    }
}
</style>