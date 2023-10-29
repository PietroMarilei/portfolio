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
        trick(){
            console.log('lol');
            // alert('hai vinto')
        }
    },
    mounted() {
        var div = document.getElementById('movableDiv');
        var distance = 55;
       document.addEventListener('mousemove', function (event) {            
            distance += event.movementX > 0 ? 10 : -10;

            // Imposta i limiti per la variabile distance
            distance = Math.max(0, distance); // per evitare valori negativi
            distance = Math.min(100, distance); // o qualsiasi limite desiderato

            // Aggiorna la posizione del div
            div.style.left = (event.clientX - distance) + 'px';
            div.style.top = (event.clientY - distance) + 'px';
        });
    }
}
</script>

<template>
    <div class="container">
        <h2>Who Am I</h2>
        <!-- ---------------- -->
        <div id="movableDiv" @click="trick()">movableDiv</div>
        <!-- ---------------- -->
        <div class="bioCont">
            <div class="leftBio">
                <div class="line"></div>
                <!-- <p>
                    My job is to instruct machines to express emotions.
                    <br>
                    ...
                    <br>
                    Code and Digital Painting have some major connections: <br>
                    It's a matter of problem-solving, addressing issues, learning languages, and finding a personal way to convey concepts.
                    <br>
                    ...
                    <br>
                    I also have this connected duality inside me, a logical calculator and a passionate communicator.
                </p> -->

                <p>
                    Hey there! I've been into problem-solving and connecting with people ever since I was a kid. I love to disassembly Legos and exploring how and why things worked around me.

                    Growing up, I discovered a more powerful toy: the computer. I used it for both gaming and experimenting with photo editing through Photoshop. This shaped a my connection with the digital world and creativity.

                    As I matured, I decided to take my passion for digital art to the next level. I delved into digital painting, using the powerful digital medium to communicate uniquely. Beside a passion for game design this became a full time job in the world of tabletop role playing games.

                    The journey didn't stop there. It evolved into coding, becoming my direct language with machines. Coding opened up a world of possibilities, allowing me to translate my creative concepts even more precisely and powerfully. Now, my life is an intersection of problem-solving, digital painting, and coding where the passion for communication blends with the magic of the digital realm.
                </p>

                <!-- <p>
                    
                    <br>
                    <br>
                    A childhood building LEGO Technic e playing video games in the basement.
                    <br>
                    ...
                    <br>
                    Using Photoshop to edit tuscanian hills around my parent's house.
                    <br>
                    ...
                    <br>
                    A teenage using digital art to connect with others.
                    <br>
                    ...
                    <br>
                    Digital paints and graphics became my passion and job during these years as Role Playing Games did.
                    <br>
                    ...
                    <br>
                    Now I know CODE I can speak directly to machines using them to create speacial connections with peoples.
                </p> -->

            </div>
            <div class="imgWrapper">
                <img src="../assets/img/profile photo.jpg" alt="a">

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
            filter: grayscale(30%);
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

.pageDown {
    padding: 0 1rem;
    position: relative;
    cursor: pointer;
    width: 100px;
    margin: 0 auto;

    .iconDown {

        .keyBodyDown {
            width: 50px;
            height: 45px;
            border: 3px solid white;
            // border-radius: 3px;
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

    // margin-bottom: 2rem;
}</style>