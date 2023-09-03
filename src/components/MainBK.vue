<script>
import BioComp from './BioComp.vue';
import { store } from '../store';
export default {
    components: {
        BioComp,
    },
    data() {
        return {
            store,
            slideLeft: 0,
            slideUp: false,
        }
    },
    methods: {
        slideConditions() {
            if (this.slideLeft == 0) {
                return ''
            } else if (this.slideLeft > 0 && this.slideLeft % 2 != 0) {
                return 'animationLeft'
            } else if (this.slideLeft > 0 && this.slideLeft % 2 == 0) {
                return 'animationRight'
            }
        }
    },
}
</script>

<template>
    <!-- main template -->
    <main>

        <div class="carousel " :class="this.slideUp == true ? 'animationFade' : ''">
            <div class="card " :class="slideConditions()">

                <img id="sineGif" src="https://media.giphy.com/media/RN1c7kbsnFNBpqOgdz/giphy.gif" alt="sineGif">
                <p @click.right="this.slideLeft++; console.log(this.slideLeft)">Forward</p>
                <div class="centerCont">
                </div>
            </div>
            <div class="card" :class="slideConditions()">

                <img id="sineGif" src="../assets/img/arrows.gif" alt="arrowsgif">
                <p @click="this.slideLeft++; console.log(this.slideLeft)">bio</p>
                <div class="centerCont">
                </div>
            </div>
            <div class="card" :class="slideConditions()">
                <button @click="this.slideLeft++; console.log(this.slideLeft)"> back</button>

                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste odio, fugiat, eveniet rem distinctio natus animi ipsa tenetur temporibus officiis nostrum consectetur a. Perferendis ea dignissimos optio iusto aut est adipisci soluta, sit, vel maiores cum ducimus facilis illum voluptatibus delectus laboriosam eaque ut cumque sapiente ratione. Voluptatum maxime quos laboriosam reprehenderit omnis consequuntur qui dolorem optio illum iure voluptatibus ut cupiditate deleniti odit, cum, placeat repellat mollitia perferendis blanditiis aut reiciendis. Recusandae, quam optio facere non ex quibusdam rem inventore voluptatem, magni necessitatibus eum architecto! Quaerat perspiciatis illo rem eius delectus nihil ullam ab eveniet vel. Quod deserunt velit corrupti minima, aut doloribus eligendi expedita doloremque possimus non molestias, fugiat aliquam nulla aliquid repellendus magni similique quo porro quaerat quae! Dolorem enim et deleniti quasi fugit porro harum optio repudiandae? Quod asperiores accusamus delectus quidem. Consectetur illo iste accusamus, deleniti earum nisi quaerat quos assumenda accusantium sint, aspernatur labore harum architecto veniam, a non tenetur? Officia, earum et cumque eveniet porro est ab eius in magni odit totam expedita suscipit quos vitae excepturi dolore repellat alias quidem consectetur nam iusto maiores quae dolor inventore. Velit similique ipsam nemo dolore vitae nobis delectus eligendi aspernatur vero quidem animi corporis nesciunt, sed facere qui impedit non harum, unde facilis maxime illo. Optio quam possimus explicabo fugiat dolores culpa deserunt eveniet, distinctio nemo? Mollitia maiores commodi obcaecati aperiam non! Velit dolorem magnam minima nam suscipit quasi, inventore veniam, at reiciendis molestiae voluptates officia necessitatibus! Mollitia eius laborum modi voluptatum voluptas eligendi cum iste rerum impedit illum ab nam ratione, nisi suscipit sunt at maiores dolor placeat et doloribus saepe? Ratione iste temporibus laudantium incidunt provident blanditiis est beatae vitae accusantium explicabo eaque eos vel hic fugit itaque cupiditate doloribus, nesciunt et non asperiores. Autem delectus temporibus dicta alias vitae ullam praesentium nam.</p>
            </div>
        </div>

        <!-- lower section -->
        <div class="vertical " :class="this.slideUp == true ? 'animationUp' : ''">
            <button @click="this.slideUp = !this.slideUp; console.log(this.slideUp)">up</button>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni dolores voluptates totam, a ducimus quos optio veniam, itaque quaerat culpa quisquam, ullam cum deserunt facilis ipsam unde cupiditate. Alias, numquam.

            </p>
        </div>
        <!-- <button>next</button>-->

    </main>
</template>

<style lang="scss" scoped>
main {
    height: 80vh;
    transition: all 1s ease-in-out;
}

p {
    padding: 1rem;
    cursor: pointer;
}

.wrapper {
    // width: 100vw;
    // padding: 1rem;
    // if i add padding here need to fix translation
}

.carousel {
    // overflow-x: hidden;
    display: flex;

    transform: translateX(-100vw);


}

.card {
    height: 100vh;
    width: 100vw;
    flex-shrink: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px dashed red;

    // img {
    //   width: 30%

    // }

}

#sineGif {
    max-width: 90vw;
    max-height: 80vh;
}


.animationLeft {
    animation: animationLeft 1s ease-in-out forwards;
}

@keyframes animationLeft {

    100% {
        translate: -100vw 0;
    }
}

.animationRight {
    animation: animationRight 1s ease-in-out forwards;
}

@keyframes animationRight {
    0% {
        translate: -100vh 0;
    }

    100% {
        translate: 0 0;
    }
}

.animationUp {
    animation: animationUp 1s ease-in-out forwards;
}

@keyframes animationUp {
    100% {
        translate: 0 -80vh;
    }
}

.animationFade {
    animation: animationFade 1s ease-in-out forwards;
}

@keyframes animationFade {
    100% {
        opacity: 0%;
    }
}

.animationRev {
    animation-direction: reverse;
}

.centerCont {
    display: flex;
    height: 100%;
    align-items: center;


    img {
        width: 90vw;
    }
}

// sine here
</style>