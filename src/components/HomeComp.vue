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
    <img src="" alt="">
    <div class="container">
        <div class="row d-flex">
            <div class="line"></div>

            <div class="pageUp" @click="$emit('goUp')">
                <!-- <p>Testo Sopra</p> -->
                <div class="iconUp">
                    <div class="keyBodyUp">
                        <div class="arrowUp">
                            <i class="fa-solid fa-chevron-up fa-fade"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="line"></div>
        </div>
        <!-- --------------------------------------center here -->
        <div class="centerContainer">
            <div class="pageLeft" @click="$emit('goLeft')">
                <div class="verticalLine"></div>
                
                <div class="iconLeft">
                    <div class="keyBodyLeft">
                        <div class="arrowLeft">
                            <i class="fa-solid fa-chevron-left fa-beat-fade"></i>
                        </div>
                    </div>

                </div>
            </div>
            <div class="row">
                <h1> Pietro Marilei
                </h1>
            </div>
             <div class="pageRight" @click="$emit('goRight')">
                    <div class="iconRight">
                        <div class="keyBodyRight">
                            <div class="arrowRight">
                                <i class="fa-solid fa-chevron-right fa-beat-fade"></i>
                            </div>
                        </div>

                    </div>
                    <div class="verticalLine"></div>
                </div>
        </div>
        <!-- --------------------------------------center here -->
        
          <div class="row d-flex">
                <div class="line"></div>

                <div class="pageDown" @click="$emit('goDown')">
                    <!-- <p>Testo Sopra</p> -->
                    <div class="iconDown">
                        <div class="keyBodyDown">
                            <div class="arrowDown">
                                <i class="fa-solid fa-chevron-down fa-fade"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="line"></div>
            </div>  
            <!-- <button @click="$emit('goLeft')"> back</button>
            <button @click="$emit('goRight')"> next</button>
            <button @click="$emit('goUp')"> up</button>
            <button @click="$emit('goDown')"> Down</button> -->

    </div>
</template>

<style lang="scss" scoped>
.container {
    flex-shrink: 0;
    border: 2px solid rgb(130, 69, 162);
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

.centerContainer {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.pageUp {
    padding: 0 1rem;
    position: relative;
    cursor: pointer;

    p {
        text-align: center;
    }

    .iconUp {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        .keyBodyUp {
            width: 50px;
            height: 45px;
            border: 3px solid white;
            border-radius: 3px;
            position: relative;

            .arrowUp {
                position: absolute;
                top: 50%;
                left: 49%;
                transform: translate(-50%, -50%);
                font-size: 1.5rem;
            }
        }
    }

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
            border-radius: 3px;
            position: relative;
            margin: 1rem ;
    
            .arrowLeft {
                position: absolute;
                top: 50%;
                left: 49%;
                transform: translate(-50%, -50%);
                font-size: 1.5rem;
            }
    }}
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
            border-radius: 3px;
            position: relative;
            margin: 1rem ;
    
            .arrowRight {
                position: absolute;
                top: 50%;
                left: 49%;
                transform: translate(-50%, -50%);
                font-size: 1.5rem;
            }
    }}
}

.pageDown {
    padding: 0 1rem;
    position: relative;
    cursor: pointer;

    p {
        text-align: center;
    }

    .iconDown {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        .keyBodyDown {
            width: 50px;
            height: 45px;
            border: 3px solid white;
            border-radius: 3px;
            position: relative;

            .arrowDown {
                position: absolute;
                top: 50%;
                left: 49%;
                transform: translate(-50%, -50%);
                font-size: 1.5rem;
            }
        }
    }

}
.line {
    width: 100%;
    height: 1px;
    border-top: 2px solid white;
    margin: 0 2rem;
}

.verticalLine {
    height: 100px;
    border-left: 3px solid white;
}
</style>