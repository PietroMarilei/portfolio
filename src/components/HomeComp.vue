<script>
import { store } from '../store';

export default {
    emits: ['goLeft', 'goRight', 'goUp', 'goDown'],
    data() {
        return {
            store,
        }
    },
    methods: {
    },
    mounted(){
        
    }
}
</script>

<template>
    <!-- <button @keyup.up="console.log('up')">test</button> -->
    <div class="container" >
        <h3 class="mx-2">use &#9650; to Bio</h3>
        <div class="row d-flex">
            <div class="lineWrapper">
                <div class="line"></div>
            </div>
            
            <div class="pageUp"  @click="$emit('goUp')">
                <div class="iconUp pulse">
                    <div class="keyBodyUp">
                        <div class="arrowUp">
                            &#9650;
                            <!-- <i class="fa-solid fa-chevron-up "></i> -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="lineWrapper">
                <div class="line"></div>
            </div>
        </div>
        <h3 class="mx-2 text-align-end">use &#9654; to Skills</h3>
        <!-- --------------------------------------center here -->
        <div class="centerContainer">
            <div class="pageLeft" @click="$emit('goLeft')">
                <div class="verticalLine"></div>

                <div class="iconLeft pulse">
                    <div class="keyBodyLeft">
                        <div class="arrowLeft">
                            &#9664;
                            <!-- <i class="fa-solid fa-chevron-left"></i> -->
                        </div>
                    </div>

                </div>
            </div>
            <div class="row">
                <h1> Pietro Marilei
                </h1>
            </div>
            <div class="pageRight" @click="$emit('goRight')">
                <div class="iconRight pulse">
                    <div class="keyBodyRight">
                        <div class="arrowRight">
                            &#9654;
                            <!-- <i class="fa-solid fa-chevron-right fa-beat-fade"></i> -->
                        </div>
                    </div>

                </div>
                <div class="verticalLine"></div>
            </div>
        </div>
        <!-- --------------------------------------center here -->
        <h3 class="mx-2 text-align-end">use &#9660; to Projects</h3>
        <div class="row d-flex">
            
            <div class="lineWrapper">
                <div class="line"></div>
            </div>

            <div class="pageDown" @click="$emit('goDown')">
                <!-- <p>Testo Sopra</p> -->
                <div class="iconDown pulse">
                    <div class="keyBodyDown">
                        <div class="arrowDown">
                            &#9660;
                            <!-- <i class="fa-solid fa-chevron-down fa-fade"></i> -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="lineWrapper">
                <div class="line"></div>
            </div>
        </div>
        <h3 class="mx-2">use &#9664; to Contacts</h3>

    </div>
</template>

<style lang="scss" scoped>
.container {
    flex-shrink: 0;
    border: 2px solid #366686;
    border-radius: 5px;
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

h3 {
    text-transform: uppercase;
    font-weight: 400;
}

.centerContainer {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}


</style>