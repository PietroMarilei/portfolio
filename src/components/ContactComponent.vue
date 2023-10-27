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
    <div class="contacts">
        <a href="">
            <i class="fa-brands fa-git-alt"></i>
        </a>

        <a href="">
            <i class="fa-solid fa-file"></i>
        </a>
        
    </div>
    <div class="pageRight" @click="$emit('goCenterfromLeft')">
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
</template>

<style lang="scss" scoped>
.contacts {
    display: flex;
    justify-content: center;
    align-items: center;

    i {
        font-size: 3rem;
    }
}

.pageRight {
    display: flex;
    justify-content: start;
    align-items: center;
    cursor: pointer;

    .iconRight {
        .keyBodyRight {
            width: 45px;
            height: 50px;
            border: 3px solid white;
            // border-radius: 3px;
            position: relative;
            margin: 1rem;

            .arrowRight {
                position: absolute;
                top: 50%;
                left: 49%;
                transform: translate(-50%, -50%);
                font-size: 1.5rem;
            }
        }
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