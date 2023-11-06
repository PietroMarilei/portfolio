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

        <div class="ideCont">
            <div class="topSec">
                <h6>&#x2632; About Me</h6>
            </div>

            <div class="middleSec">
                <div class="col-left">
                    <!-- <img src="../assets/img/FotoCv_SQUARE2.jpg" alt="a"> -->

                    <div class="glitch" style="">
                        <div class="channel r"></div>
                        <div class="channel g"></div>
                        <div class="channel b"></div>
                    </div>

                    
                </div>

                <div class="col-right">
                    <p>
                        Trained by a childhood filled with &#8883; Legos, I love finding practical solutions to bring things together &#8904;. <br>
                        The code ䷃ is for me the perfect 'dojo' to unleash my logic and imagination, always with an &#128065; eye for design.
                    </p>
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
@use '../assets/scss/partials/variables.scss' as *;

.container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
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

.downWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.lowerSection {
    position: absolute;
    width: 100%;
    bottom: -2rem;
    left: 50%;
    transform: translate(-50%, -50%);

    h3 {
        text-transform: uppercase;
        font-weight: 400;
    }
}
// -img glitch 

@function rand($min, $max) {
  @return random() * ($max - $min) + $min;
}

$animation-duration: 3s;
$glitch-duration: 20%;
$glitch-frequency: 10;
$glitch-interval: $glitch-duration / $glitch-frequency;

@mixin rgb-shift($name) {
  @keyframes rgb-shift-#{$name} {
    @for $i from 0 to $glitch-frequency {
      #{$i * $glitch-interval} {
        transform: translate(
          #{rand(-2, 2) * 1%},
          #{rand(-0.5, 0.5) * 1%}
        );
      }
    }

    #{$glitch-duration}, 100% {
      transform: none;
    }
  }

  animation: rgb-shift-#{$name} $animation-duration steps(1, jump-end) infinite alternate both;
}

@mixin glitch($name) {
  @keyframes glitch-#{$name} {
    @for $i from 0 to $glitch-frequency {
      $left: 0%;
      $right: 100%;
      $top: rand(0, 90) * 1%;
      $bottom: $top + rand(1, 10) * 1%;

      #{$i * $glitch-interval} {
        clip-path: polygon(
          $left $top,
          $right $top,
          $right $bottom,
          $left $bottom
        );
        transform: translate(
          #{rand(-8, 8) * 1%},
          #{rand(-0.5, 0.5) * 1%}
        );
      }
    }

    #{$glitch-duration}, 100% {
      clip-path: none;
      transform: none;
    }
  }

  animation: glitch-#{$name} $animation-duration linear infinite alternate both;
}

body {
  margin: 0;
}

.glitch {
  background: #000 no-repeat center;
  background-image: url(../assets/img/FotoCv_SQUARE2.jpg) ;
  background-size: 0;
  height: 100%;
  aspect-ratio: 1 / 1;
  position: relative;
  overflow: hidden;

  &::before,
  &::after,
  .channel {
    background: inherit;
    background-size: cover;
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }

  &::before {
    @include glitch(before);
    content: "";
  }

  &::after {
    @include glitch(after);
    content: "";
  }

  .channel {
    mix-blend-mode: screen;

    &::before {
      bottom: 0;
      content: "";
      display: block;
      mix-blend-mode: multiply;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
    }
  }

  .r {
    @include rgb-shift(r);

    &::before {
      background: #f00;
    }
  }

  .g {
    @include rgb-shift(g);

    &::before {
      background: #0f0;
    }
  }

  .b {
    @include rgb-shift(b);

    &::before {
      background: #00f;
    }
  }
}
</style>