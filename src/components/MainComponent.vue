<script>
import { store } from '../store';
import { vShow } from 'vue';
import HomeComp from './HomeComp.vue';
import BioComponent from './BioComponent.vue'
import SkillsComponent from './SkillsComponent.vue';
import ContactComponent from './ContactComponent.vue';
import ProjectsComponent from './ProjectsComponent.vue';
export default {
  components: {
    HomeComp,
    BioComponent,
    SkillsComponent,
    ContactComponent,
    ProjectsComponent,
  },
  data() {
    return {
      store,
      animationClass: '',

    }
  },
  methods: {
    goUp() {
      console.log('goUp');
      this.animationClass = 'goUp'
    },
    goDown() {
      console.log('goDown');
      this.animationClass = 'goDown'

    },
    goRight() {
      console.log('goRight');
      this.animationClass = 'goRight'
    },
    goLeft() {
      console.log('goLeft');
      this.animationClass = 'goLeft'
    },
    // -----------------------------------------
  
    goCenterFromRight() {
      console.log('goCenterFromRight');
      this.animationClass = 'goCenterfromRight'
    },

    goCenterfromLeft() {
      console.log('goCenterfromLeft');
      this.animationClass = 'goCenterfromLeft'
    },
    goCenterfromDown() {
      console.log('goCenterfromDown');
      this.animationClass = 'goCenterfromDown'
    },
    goCenterfromUp() {
      console.log('goCenterfromUp');
      this.animationClass = 'goCenterfromUp'
    },
  },

  mounted() {
    // steamyMover here 🔀
    window.addEventListener('keyup', (event) => {
      console.log(event.keyCode);
      console.log((this.animationClass));

      let key = event.keyCode
// il controllo parte dal tasto, se premo su, o sono sulla pagina centrale oppure su quella giú. Per verificare di essere nella pagina centrale basta verificare se il testo è diverso goDown che sarebbe il testo presente se fossi nella pagina giú. Quindi SE NON SONO nella pagina giú e sto premendo su vuol dire che sono al centro. SE SONO nella pagina giú, voglio tornare al centro da giú
      if (key == '38') {
        if(this.animationClass !== 'goDown'){
          this.animationClass = 'goUp';
        } else {
          this.animationClass = 'goCenterfromDown';
        }
      } else
        if (key == '40') {
          if(this.animationClass !== 'goUp'){
            this.animationClass = 'goDown';
          } else {
            this.animationClass = 'goCenterfromUp';
          }
        } else
          if (key == '37') {
            if (this.animationClass !== 'goRight') {
              this.animationClass = 'goLeft';  
            } else {
              this.animationClass = 'goCenterfromRight';
            }
          }
          else
            if (key == '39') {
              if (this.animationClass !== 'goLeft') {
                this.animationClass = 'goRight';  
              } else {
                this.animationClass = 'goCenterfromLeft';
    
              }
            }
    });
  }
}
</script>

<template>
  <!-- main template -->
  <main>
    <div class="mainWrapper">
      <!-- here's go steamyMover animations  -->
      <div class="mainContainer" :class="this.animationClass">
        <!-- up section -->
        <div class="topContainer">

          <div class="card">
            <BioComponent @goCenterfromUp="goCenterfromUp()"/>
          </div>

        </div>
        <!-- center 3 cards section -->
        <div class="centerContainer ">
          <div class="card">
            <ContactComponent @goCenterfromLeft="goCenterfromLeft()"/>
            <!-- <TestComp />
            <button @click=" goCenterfromLeft()"> back</button> -->
            
          </div>


          <div class="card">
            <HomeComp @goLeft=" goLeft()" @goRight=" goRight()" @goUp=" goUp()" @goDown=" goDown()" />

          </div>

          <div class="card ">
            <SkillsComponent @goCenterfromRight="goCenterFromRight()"/>
     
          </div>
        </div>
        <!-- bottom section -->
        <div class="bottomContainer">

          <div class="card">
            <ProjectsComponent @goCenterfromDown="goCenterfromDown()" />
          </div>

        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  position: relative;
}

p {
  padding: 1rem;
  cursor: pointer;
  background-color: blue;
}

.mainWrapper {
  height: 100svh;
  width: 100vw;
  overflow: hidden;
}

.mainContainer {
  transform: translate(-100vw, -100svh);
  transition: all 1s linear;

}

.topContainer {
  transform: translate(100vw);
  display: flex;
  flex-wrap: nowrap;

}

.centerContainer {
  display: flex;
  flex-wrap: nowrap;
}

.bottomContainer {
  transform: translate(100vw);
  display: flex;
  flex-wrap: nowrap;

  height: 100%;
  overflow-y: auto;
  //permette alla card di scrollare

}

.card {
  height: 100svh;
  width: 100vw;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // border: 3px dashed rgb(255, 0, 0);
  padding: 1rem;

}
@media only screen and (max-width: 425px) {
.card{
  padding: 0 !important;
}
}
</style>