<script>
import { store } from '../store';

export default {
    emits: ['goCenterfromRight'],
    data() {
        return {
            store,
            isActive: 0,
            typedText: "",
        };
    },
    methods: {
        showOnclick(i) {
            this.isActive = i;
        },

    },
    mounted() {

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
                <h6>☵ My Skills</h6>
            </div>

            <div class="middleSec">
                <div class="col-left">
                    <ul>
                        <li v-for="(singleSkill, i) in this.store.skills" :key="i" class="d-flex align-items-center " @click="showOnclick(i); startTypewriter(singleSkill.description)">

                            <div v-if="isActive == i" class="">
                                &#8594; &nbsp;
                            </div>
                            <div v-else>
                                <i :class="singleSkill.icon"></i>&nbsp
                                <!-- ₪ &nbsp -->
                            </div>
                            <p>{{ singleSkill.name }}</p>
                        </li>
                    </ul>
                </div>

                <div class="col-right">
                    <div v-for="(singleSkill, i) in this.store.skills" :key="i" @click="showOnclick(i)" class="langDescription" :class="isActive == i ? 'active ' : 'unselected'">
                        <div class="fakeFunc">
                            <span>function</span> <span>I_Can(<span>{{ singleSkill.name }}</span>)</span> <span>{</span>

                            <p>{{ singleSkill.description }}</p> <span>}</span>
                        </div>

                        <div class="langIcon">
                            {<i :class="singleSkill.icon"></i>}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as *;

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
    height: 100%;
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
        width: 30%;
        padding: 2rem;
        padding-top: 0.5rem;
        padding-left: 1rem;
        padding-bottom: 0.5rem;
        font-weight: 500;
        font-size: 1rem;
        border-right: 2px solid #366686;

    }
}

.middleSec {
    display: flex;

    .col-left {
        width: 30%;
        height: calc((100vh * 0.7) - 4rem);
        // height: 100%;
        border-right: 2px solid #366686;
        padding: 2rem;
        padding-left: 1rem;

        ul {
            cursor: pointer;
            font-weight: 300;

            li {
                margin-bottom: 0.3rem;
            }
        }
    }

    .col-right {
        height: 100%;
        width: 70%;
        padding: 2rem;
        padding-bottom: 0;

        * {
            transition: all 0.5s ease-in-out;
        }

        .langDescription {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            position: relative;

            .fakeFunc {
                span:first-child {
                    color: $third-color;
                }

                span:nth-child(2) {
                    color: rgb(128, 221, 240);

                    span {
                        color: rgb(255, 109, 77)
                    }
                }

                span:nth-child(3),
                span:nth-child(5) {
                    color: gold;
                }

                p {
                    text-align: justify;
                    margin: 0.5rem 0;
                    margin-left: 5rem;
                }
            }

            .langIcon {
                font-size: 3rem;
                text-align: end;
            }

        }
    }
}

.unselected {
    opacity: 0%;

    * {
        display: none;
    }
}

.active {
    opacity: 100%;
}

.skillsContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 70vh;
}

@media only screen and (max-width: 425px) {

    .skillsContainer {
        height: 90vh;
    }

    .ideCont {
        margin: 10px;
    }

    .col-left {
        height: 80vh !important;
        padding: 10px !important;
        width: 35% !important;

        li:nth-child(4) {
            p {
                display: none;
            }
        }
        
        li:nth-child(4):after {
            font-size: 0.8rem;
            content: "Js";
        }
    }

    .col-right {
        padding: 15px !important;
        width: 65% !important;

        .langIcon {
            font-size: 2rem !important;
        }
    }

    .topSec {
        text-align: center;

        h6 {
            width: 100%;
            border-right: none;
        }
    }

    .fakeFunc {
        p {
            margin-left: 0rem !important;
        }
    }
}</style>