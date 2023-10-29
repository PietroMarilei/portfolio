<script>
import { store } from '../store';

export default {
    emits: ['goCenterfromRight'],
    data() {
        return {
            store,
            isActive: 0,
            skills: [
                {
                    name: 'HTML',
                    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas dolor maxime distinctio reprehenderit alias repudiandae! Esse, vero doloremque! Maxime, necessitatibus? Minima, temporibus! Natus accusantium sunt velit porro, et voluptatum sint?',
                    icon: '',
                },
                {
                    name: '(S)CSS',
                    description: 'CSSSSSSSSLorem ipsum, dolor sit amet consectetur adipisicing elit. Quas dolor maxime distinctio reprehenderit alias repudiandae! Esse, vero doloremque! Maxime, necessitatibus? Minima, temporibus! Natus accusantium sunt velit porro, et voluptatum sint?',
                    icon: '',
                },
                {
                    name: 'Bootstrap',
                    description: 'CSSSSSSSSLorem ipsum, dolor sit amet consectetur adipisicing elit. Quas dolor maxime distinctio reprehenderit alias repudiandae! Esse, vero doloremque! Maxime, necessitatibus? Minima, temporibus! Natus accusantium sunt velit porro, et voluptatum sint?',
                    icon: '',
                },
                {
                    name: 'Javascript',
                    description: 'CSSSSSSSSLorem ipsum, dolor sit amet consectetur adipisicing elit. Quas dolor maxime distinctio reprehenderit alias repudiandae! Esse, vero doloremque! Maxime, necessitatibus? Minima, temporibus! Natus accusantium sunt velit porro, et voluptatum sint?',
                    icon: '',
                },
              
                {
                    name: 'Vue.js',
                    description: 'CSSSSSSSSLorem ipsum, dolor sit amet consectetur adipisicing elit. Quas dolor maxime distinctio reprehenderit alias repudiandae! Esse, vero doloremque! Maxime, necessitatibus? Minima, temporibus! Natus accusantium sunt velit porro, et voluptatum sint?',
                    icon: '',
                },
                {
                    name: 'PHP',
                    description: 'CSSSSSSSSLorem ipsum, dolor sit amet consectetur adipisicing elit. Quas dolor maxime distinctio reprehenderit alias repudiandae! Esse, vero doloremque! Maxime, necessitatibus? Minima, temporibus! Natus accusantium sunt velit porro, et voluptatum sint?',
                    icon: '',
                },
                {
                    name: 'SQL',
                    description: 'CSSSSSSSSLorem ipsum, dolor sit amet consectetur adipisicing elit. Quas dolor maxime distinctio reprehenderit alias repudiandae! Esse, vero doloremque! Maxime, necessitatibus? Minima, temporibus! Natus accusantium sunt velit porro, et voluptatum sint?',
                    icon: '',
                },
                {
                    name: 'Laravel',
                    description: 'CSSSSSSSSLorem ipsum, dolor sit amet consectetur adipisicing elit. Quas dolor maxime distinctio reprehenderit alias repudiandae! Esse, vero doloremque! Maxime, necessitatibus? Minima, temporibus! Natus accusantium sunt velit porro, et voluptatum sint?',
                    icon: '',
                },
                {
                    name: 'Git',
                    description: 'CSSSSSSSSLorem ipsum, dolor sit amet consectetur adipisicing elit. Quas dolor maxime distinctio reprehenderit alias repudiandae! Esse, vero doloremque! Maxime, necessitatibus? Minima, temporibus! Natus accusantium sunt velit porro, et voluptatum sint?',
                    icon: '',
                },
                
            ],
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
    <div class="container">
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
                    <h4>#Skills</h4>
                </div>

                <div class="middleSec">
                    <div class="col-left">
                        <ul>
                            <li v-for="(singleSkill, i) in skills" :key="i" class="d-flex"
                            @click="showOnclick(i)">
                            <div v-if="isActive == i" class="d-inline">
                                v &nbsp;
                            </div>
                            <div v-else>
                                .
                            </div>
                        {{ singleSkill.name }}</li>                 
                        </ul>
                    </div>

                    <div class="col-right">
                        <p v-for="(singleSkill, i) in skills" :key="i" @click="showOnclick(i)" class="thumb"
                                :class="isActive == i ? 'active ' : 'unselected'">
                            {{singleSkill.description}}
                        </p>
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

.ideCont {
    margin: 2rem;
    padding-top: 0;
    border: 2px solid #366686;
    border-radius: 5px;
}

.topSec {
    width: 100%;
    text-align: center;
    margin: 0 auto;
    border-bottom: 2px solid #366686;

    h4 {
        padding: 3rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        font-weight: 600;
        font-size: larger;
    }
}

.middleSec {
    display: flex;

    .col-left {
        width: 20%;
        height: calc(100vh - 6rem);
        border-right: 2px solid #366686;

        ul {
            padding: 0.8rem;
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