<script>
import { store } from '../store';
import emailjs from 'emailjs-com';

export default {
    emits: ['goCenterfromLeft'],
    data() {
        return {
            store,
            emailSent: false,
            selectedTab: 0
        }
    },
    methods: {
        sendEmail() {
            emailjs.sendForm('service_7pcawhq', "template_mvv9u1v", this.$refs.form, 'hwfa9NZauEuT06LJ7')
                .then((result) => {
                    this.emailSent = true;
                    console.log('EMAIL -> SUCCESS!', result.text);
                }, (error) => {
                    console.log('EMAIL -> FAILED...', error.text);
                });
        }
    },
}
</script>

<template>
    <div class="ideCont">
        <div class="topSec">
            <ul class="d-flex">
                <li @click="this.selectedTab = 0" :class="this.selectedTab != 0 ? 'greyed' : ''">
                    <h6>☲  Contact me here &#9660;</h6>
                </li>
                <li @click="this.selectedTab = 1" :class="this.selectedTab != 1 ? 'greyed' : ''">
                    <h6> ⇒ my Git-Hub &#9660;</h6>
                </li>
                <li @click="this.selectedTab = 2" :class="this.selectedTab != 2 ? 'greyed' : ' '">
                    <h6>⋧ my Linkedin &#9660;</h6>
                </li>
                <li @click="this.selectedTab = 3" :class="this.selectedTab != 3 ? 'greyed' : ''">
                    <h6>≥ my resume &#9660;</h6>
                </li>
            </ul>
        </div>

        <!-- form-------------- -->
        <div class="innerContainer" :class="this.selectedTab == 0 ? '' : 'd-none'">
            <form ref="form" @submit.prevent="sendEmail">
                <div s>
                    <label for="">_your name:</label>
                    <input type="text" name="user_name" class="d-block" placeholder="type your name">
                </div>

                <div>
                    <label for="">_your e-mail:</label>
                    <input type="email" name="user_email" class="d-block" placeholder="type your email">
                </div>

                <div class="d-block">
                    <label for="">_say Hi:</label>
                    <textarea name="message" placeholder="Type your message." class="textArea"></textarea>
                </div>
                <div class="lowerForm">
                    <input type="submit" value="Send">
                    <p :class="this.emailSent ? '' : 'd-none '">Message Sent!</p>
                </div>
            </form>
        </div>

        <!-- ----------------- -->

        <!-- Git-Hub down here -->
        <div class="innerContainer" :class="this.selectedTab == 1 ? '' : 'd-none'">
            <p>
                Check my git-hub here ->
            </p>
            <a href="https://github.com/PietroMarilei" class="d-flex" target="_blank">
                <i class="fa-brands fa-git-alt"></i> <span>github.com/PietroMarilei</span>
            </a>
        </div>

        <!-- linkedin down here -->
        <div class="innerContainer" :class="this.selectedTab == 2 ? '' : 'd-none'">
            <p>
                Check my Linkedin here ->
            </p>
            <a href="https://www.linkedin.com/in/pietromarilei/" class="d-flex" target="_blank">
                <i class="fa-brands fa-linkedin"></i> <span>linkedin/pietromarilei</span>
            </a>
        </div>
        <!-- resume here -->
        <div class="innerContainer" :class="this.selectedTab == 3 ? '' : 'd-none'">
            <p>
                Download my resume here ->
            </p>
            <a href="./PietroMarilei-WebDeveloper.pdf" target="_blank" class="d-flex">
                <i class="fa-solid fa-file"></i> <span>My resume</span>
            </a>
        </div>
    </div>
    <div class="pageRight" @click="$emit('goCenterfromLeft')">
        <div class="iconRight pulse">
            <div class="keyBodyRight">
                <div class="arrowRight">
                    &#9654;
                    <!-- <i class="fa-solid fa-chevron-right fa-beat-fade"></i> -->
                </div>
            </div>

        </div>
        <div class="verticalLine"></div>
    </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;

.innerContainer {
    height: 93%;
    display: flex;
    justify-content: center;
    align-items: center;

    a {

        text-decoration: none;
        font-weight: 500;
        cursor: pointer;
        color: $third-color;

        i {
            margin: 0 1rem;
            font-size: 2rem;
        }
    }

    a:hover {
        span {
            text-decoration: underline;
        }
    }
}

form {
    label {
        font-size: 0.8rem;
        padding: 0.2rem 0;
    }

    input {
        all: unset;
        display: block;
        width: 100%;
        font-size: 0.8rem;
        padding: 0.3rem;
        margin: 0.5rem 0;
        padding-right: 0;
        border: 2px solid #366686;
        border-radius: 5px;
        background-color: none;
    }

    textarea {
        border: 2px solid #366686;
        border-radius: 5px;
        padding: 0.3rem;
        color: white;
        // ??
        width: 103%;
        background-color: #010c16;
    }

    input[type="submit"] {
        width: unset;
        padding: 0.3rem 0.5rem;
        background-color: #192f44;
    }

    .lowerForm {
        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
            text-align: end;
        }
    }
}

.ideCont {
    margin: 2rem;
    border: 2px solid #366686;
    border-radius: 5px;
    height: 70%;
    width: 100%;
}

.topSec {
    // height: 7%;
    width: 100%;
    text-align: start;
    margin: 0 auto;
    border-bottom: 2px solid #366686;

    .greyed {
        color: #366686;
    }

    h6 {
        padding: 2rem;
        padding-top: 0.5rem;
        padding-left: 1rem;
        padding-bottom: 0.5rem;
        font-weight: 300;
        font-size: 1rem;
        border-right: 2px solid #366686;

    }
}


@media only screen and (max-width: 425px) {
    .ideCont {
        margin: 10px;
    }

    .topSec {
        h6 {
            font-size: 0.8rem;
            border: none;
            padding: 0.5rem;
        }
    }

    ul {
        flex-wrap: wrap;
        justify-content: center;
    }

    label {
        font-size: 0.6rem !important;
    }

    input,
    textarea {
        font-size: 0.6rem !important;
    }

    .innerContainer {
        flex-wrap: wrap;
        height: 20%;
        padding-top: 1rem;
    }

}</style>