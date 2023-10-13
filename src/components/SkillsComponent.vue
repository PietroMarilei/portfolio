<script>
import { store } from '../store';

export default {
    emits: ['goCenterfromRight'],
    data() {
        return {
        }
    },
    methods: {

    },
}
</script>

<template>
    <div class="pageLeft" @click="$emit('goCenterfromRight')">
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

<div class="skillsContainer">

    <p>
        <div class="skillWrapper">
            <div class="html5Wrapper">
                <img src="../assets/img/html-5.png" alt="html">
                <h3>Html 5 : </h3>
                <div class="progress"></div>
            </div>
            <p>https://www.w3schools.com/howto/howto_js_accordion.asp</p>
        </div>
        <!-- --------- -->
         <div class="skillWrapper">
                <div class="CSSWrapper">
                    <img src="../assets/img/CSS.png" alt="css">
                    <h3>CSS : </h3>
                    <div class="progress"></div>
                </div>
            </div>
            <!-- --------- -->
       
    </p>
    
</div>
</template>

<style lang="scss" scoped>
.pageLeft {
    display: flex;
    justify-content: start;
    align-items: center;
    cursor: pointer;

    .iconLeft {
        .keyBodyLeft {
            width: 45px;
            height: 50px;
            border: 3px solid white;
            // border-radius: 3px;
            position: relative;
            margin: 1rem;

            .arrowLeft {
                position: absolute;
                top: 50%;
                left: 49%;
                transform: translate(-50%, -50%);
                font-size: 1.5rem;
            }
        }
    }
}

.skillsContainer {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.progress {
    border: 5px solid rgb(223, 223, 223);
    margin: 0 0.5rem;
}
.skillWrapper {
    padding: 1rem 0;
}
.html5Wrapper {
    display: flex;
    align-items: center;
    img {
        filter: grayscale(80%);
        width: 3rem;
    }
    .progress {
        width: 50%
    }
}
.CSSWrapper {
    display: flex;
    align-items: center;
    img {
        filter: grayscale(80%);
        width: 3rem;
    }
    .progress {
        width: 50%
    }
}
.lineWrapper {
    width: 100%;
    margin: 0 2rem;
}

.line {
    width: 100%;
    height: 1px;
    border-top: 2px solid white;

}

.verticalLine {
    height: 100px;
    border-left: 3px solid white;
}
</style>