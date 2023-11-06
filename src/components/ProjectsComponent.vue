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
	                <div class="col-left">
	                    <!-- <img src="../assets/img/FotoCv_SQUARE2.jpg" alt="a"> -->
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nemo fugit, facilis veniam, animi rerum voluptatem repellat vero praesentium debitis ab fugiat ducimus perspiciatis fuga cumque rem harum ad incidunt.
	                </div>

	                <div class="col-right">
										
	                    <div class="projetCard">
												Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptatibus obcaecati eos quis, quaerat a architecto cum molestiae ex deserunt harum aliquid dolor molestias porro. Commodi assumenda tempore alias debitis.
											</div>


	                </div>
	            </div>
				</div>       
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;
.projetCard {
	
}
.ideCont {
    margin: 2rem;
    padding-top: 0;
    border: 2px solid #366686;
    border-radius: 5px;
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
    .col-right {
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

    .col-left {
        width: 30%;
        // height: calc((100vh * 0.7) - 4rem);
        border-right: 2px solid #366686;
        padding: 2rem;
    }

    img {
        width: 300%;
    }
}
.container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
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
</style>