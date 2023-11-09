<script>
import { store } from '../store';

export default {
    emits: ['goCenterfromDown',],
    data() {
        return {
            store,
        }
    },
    methods: {
        getImagePath: function (img) {
            console.log(img);
            return new URL(`../assets/img/${img}`, import.meta.url).href;
        },
    },
}
</script>

<template>
    <div class="container">

        <div class="upperSection">
            <div class="downWrapper">
                <div class="line"></div>
                <div class="pageUp" @click="$emit('goCenterfromDown')">
                    <div class="iconUp pulse">
                        <div class="keyBodyUp">
                            <div class="arrowUp">
                                &#9650;
                            </div>
                        </div>
                    </div>
                </div>
                <div class="line"></div>
            </div>
            <h3 class="mx-2 text-align-end">use &#9650; to Home</h3>
        </div>

        <div class="ideCont">
            <div class="topSec">
                <h6>&#x2632; My Projects</h6>
            </div>
            <div class="middleSec">

                <div class="col-right">

                    <div class="projectCard" v-for="(singleProject, i) in this.store.projects" key="i">
                        <div class="cardHeader">
                            <p>
                                &#10551; {{ singleProject.name }}
                            </p>
                            <div>
                                <span class="singleTech" v-for="singleTech in singleProject.languages">
                                    <i :class="singleTech"></i>
                                </span>
                            </div>
                        </div>

                        <div class="cardBody">
                            <img :src="singleProject.img" alt="a">
                            <p>
                                {{ singleProject.description }}
                            </p>

                            <div class="functionality">
                                ~ {{ singleProject.functionality }}
                            </div>

                            <div class="btnLink"> 
                                <a target="_blank" :href="singleProject.link">
                                    View_Project
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;

.container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
}


.ideCont {
    height: 100%;
    overflow-y: auto;
    margin: 2rem;
    margin-top: 8rem;
    border: 2px solid #366686;
    border-radius: 5px;

    .topSec {
        width: 100%;
        text-align: start;
        margin: 0 auto;
        border-bottom: 2px solid #366686;

        h6 {

            padding: 2rem;
            padding-top: 0.5rem;
            padding-left: 1rem;
            padding-bottom: 0.5rem;
            font-weight: 500;
            font-size: 1rem;
            text-align: center;
            // border-right: 2px solid #366686;
        }
    }

    .col-right {
        overflow-y: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        height: 100%;
        width: 70%;
        padding: 2rem;

        p {
            text-align: justify;
        }
    }
}

.middleSec {
    display: flex;
    justify-content: center;

    .col-left {
        width: 30%;
        // height: calc((100vh * 0.7) - 4rem);
        border-right: 2px solid #366686;
        padding: 2rem;
    }
}


.downWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.upperSection {
    position: absolute;
    width: 100%;
    top: 4rem;
    left: 50%;
    transform: translate(-50%, -50%);

    h3 {
        text-transform: uppercase;
        font-weight: 400;
    }
}

.projectCard {
    // width: calc(100% / 1 - 1rem);
    margin: 0.5rem;
    border: 2px solid #366686;
    border-radius: 5px;
    background-color: #0d1d2d7d;
    transition: 0.5s;
   
    .cardHeader {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem 1rem;
        border-bottom: 2px solid #366686;
        text-transform: uppercase;
        font-size: 1rem;
        font-weight: 500 !important;

        .singleTech {
            margin: 0 5px;
            font-size: 1.3rem;
        }
    }

    .cardBody {
        padding: 1rem;
        img {
            border-radius: 7px;
        }
        p {
            margin: 2rem 0;
        }
        .functionality {
            text-align: end;
            font-size: 0.8rem;
            font-style: italic;
            margin: 1rem 0;
        }
        .btnLink{
            text-align: end;
        }
        a {
            cursor: pointer !important;
            display: block;
            all: unset;
            font-size: 0.8rem;
            margin: 1rem 0;
            border: 2px solid #366686;
            border-radius: 5px;
            padding: 0.3rem 0.5rem;
            background-color: #192f44;
            transition: 0.5s;
        }

        a:hover {
            background-color: #6689aa ;
            color:#08131d ;
            font-weight: 600;
        }
    
    }
       
}
 .projectCard:hover {
        background-color: #122c4665;
    }
</style>