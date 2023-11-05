<script>
import { store } from '../store';

export default {
    emits: ['goCenterfromUp'],
    data() {
        return {
            store,
        }
    },
    methods: {
       
    },
    mounted() {
    }
}
</script>

<template>
    <div class="container">
        <div class="skillsContainer">
    
            <div class="ideCont">
                <div class="topSec">
                    <h6>Who Am I</h6>
                </div>
    
                <div class="middleSec">
                    <div class="col-left">
                        <div class="imgWrapper">
                    <img src="../assets/img/FotoCv_SQUARE2.jpg" alt="a">
    
                </div>
                    </div> 
                    <div class="col-right">
                        Hey there! I've been into problem-solving and connecting with people ever since I was a kid. I love to disassembly Legos and exploring how and why things worked around me.
    
                        Growing up, I discovered a more powerful toy: the computer. I used it for both gaming and experimenting with photo editing through Photoshop. This shaped a my connection with the digital world and creativity.
    
                        As I matured, I decided to take my passion for digital art to the next level. I delved into digital painting, using the powerful digital medium to communicate uniquely. Beside a passion for game design this became a full time job in the world of tabletop role playing games.
    
                        The journey didn't stop there. It evolved into coding, becoming my direct language with machines. Coding opened up a world of possibilities, allowing me to translate my creative concepts even more precisely and powerfully. Now, my life is an intersection of problem-solving, digital painting, and coding where the passion for communication blends with the magic of the digital realm.
                    </div>
                </div>
            </div>
        </div>
   


        <div class="lowerSection">
            <h3 class="mx-2 text-align-end">use &#9660; to Home</h3>

            <div class="downWrapper">
                <div class="line"></div>
                <div class="pageDown" @click="$emit('goCenterfromUp')">
                    <div class="iconDown pulse">
                        <div class="keyBodyDown">
                            <div class="arrowDown">
                                &#9660;
                            </div>
                        </div>
                    </div>
                </div>
                <div class="line"></div>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss'as *;

#movableDiv {
    position: absolute;
    padding: 1rem;
    border: 2px dashed red;
}
.container {
    width: 100%;
    height: 100%;
    border: 2px solid rgb(130, 69, 162);
    border-radius: 5px;
    padding: 3rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
        padding: 0rem 1rem;
    }
}

.bioCont {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    .leftBio {
        padding: 1rem 0;
        p {
            padding: 1rem 0;
        }
    }

    .imgWrapper {
        width: 500%;
        padding: 1rem;
        img {
            border: 2px solid rgb(143, 143, 143);
            padding: 0.4rem;
            border-radius: 3px;   
        }
    }
}

h3 {
    text-transform: uppercase;
    font-weight: 400;
}
.downWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
        border-right: 2px solid #366686;
        padding: 2rem;
        padding-left: 1rem;

    }

    .col-right {
        height: 100%;
        width: 70%;
        padding: 2rem;
        padding-bottom: 0;

    }
}
</style>