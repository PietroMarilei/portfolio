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
}
</script>

<template>
    <div class="container" >
        <div class="bioCont">    
            <p>
                È tutta la vita che convinco le macchine a fare cose 
             <br>
             <br>
                Da bambino costruivo LEGO Technic e giocavo ad Age of Empires I nel seminterrato dei miei.
                <br> 
                Sul tubo catodico di mio padre usavo Photoshop per editare le foto delle colline toscane intorno a me.
                <br>
                Da adolescente facevo musica con Fruity Loops e una batteria in garage.
                <br>
                Poi una scuola di arte digitale e grafica, ore a muovere colori ad olio digitale.
                <br>
                Adesso ho deciso di scendere alla radice: codice, parliamo chiaro computer, tu fai quello che dico io. Questo sito sará una figata!
            </p>
            <div class="imgWrapper">
                    <img src="../assets/img/profile photo.jpg" alt="a">
                </div>
        </div>
        <div class="pageDown" @click="$emit('goCenterfromUp')">
            <div class="iconDown pulse">
                <div class="keyBodyDown">
                    <div class="arrowDown">
                        &#9660;
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 100%;
    border: 2px solid rgb(130, 69, 162);
    border-radius: 5px;
    padding: 3rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
}
.bioCont{
    display: flex;
    justify-content: space-between;
    p {
        padding: 1rem;
    }

    .imgWrapper{
        width: 100%;
        img {
            border: 2px solid rgb(143, 143, 143);
            padding: 0.4rem;
            border-radius: 3px;
            filter: grayscale(30%);
        }
    }
}
.pageDown {
    padding: 0 1rem;
    position: relative;
    cursor: pointer;
    width: 100px;

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
</style>