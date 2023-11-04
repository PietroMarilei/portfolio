<script>
import { store } from '../store';

export default {
    emits: ['goCenterfromRight'],
    data() {
        return {
            store,
            isActive: 0,

        };
    },
    methods: {
        showOnclick(i) {
            this.isActive = i
        }
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
                </div>
            </div>

        </div>
    </div>

    <div class="skillsContainer">

        <div class="ideCont">
            <div class="topSec">
                <h6>&#x2632; My Skills</h6>
            </div>

            <div class="middleSec">
                <div class="col-left">
                    <ul>
                        <li v-for="(singleSkill, i) in this.store.skills" :key="i" class="d-flex align-items-center" @click="showOnclick(i)">
                            <div v-if="isActive == i" class="">
                                ⧪ ₪ &nbsp;
                            </div>
                            <div v-else>
                                <i :class="singleSkill.icon"></i>&nbsp
                                <!-- ₪ &nbsp -->
                            </div>
                            {{ singleSkill.name }}
                        </li>
                    </ul>
                </div>

                <div class="col-right">
                    <div v-for="(singleSkill, i) in this.store.skills" :key="i" @click="showOnclick(i)" class="thumb" :class="isActive == i ? 'active ' : 'unselected'">
                        {{ singleSkill.description }}

                        <!-- <img :src="singleSkill.icon" alt=""> -->

                        <i :class="singleSkill.icon"></i>

                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    flex-shrink: 0;
    border: 2px solid #366686;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: start;
}

.ideCont {
    margin: 2rem;
    padding-top: 0;
    border: 2px solid #366686;
    border-radius: 5px;
}

.topSec {
    width: 100%;
    text-align: start;
    margin: 0 auto;
    border-bottom: 2px solid #366686;

    h6 {
        width: 20%;
        padding: 2rem;
        padding-top: 0.5rem;
        padding-left: 1rem;
        padding-bottom: 0.5rem;
        font-weight: 300;
        font-size: 1rem;
        border-right: 2px solid #366686;

    }
}

.middleSec {
    display: flex;

    .col-left {
        width: 20%;
        height: calc(100vh - 6rem);
        border-right: 2px solid #366686;

        ul {
            padding: 1rem;
            font-weight: 500;

            li {
                margin-bottom: 0.3rem;
            }
        }
    }

    .col-right {
        width: 80%;
        padding: 0.8rem;

        * {
            transition: all 0.5s ease-in-out;

        }
    }
}

.unselected {
    height: 0;
    opacity: 0;
}

.active {
    height: 100%;
    opacity: 100%;

}

.skillsContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;


}
</style>