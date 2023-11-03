<script>
import { store } from '../store';
import emailjs from 'emailjs-com';

export default {
    emits: ['goCenterfromLeft'],
    data() {
        return {
            store,
            emailSent : false
        }
    },
    methods: {
        sendEmail() {
            emailjs.sendForm('service_7pcawhq', "template_mvv9u1v", this.$refs.form, 'hwfa9NZauEuT06LJ7')
                .then((result) => {
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
            <h4>#Contact me here &#9660;</h4>
        </div>
        <!-- form-------------- -->
        <div class="formContainer">
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
                <div class="lowerForm d-flex">
                    <input type="submit" value="Send">
                </div>
            </form>
        </div>

        <!-- ----------------- -->

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

    <!-- <div class="contacts">
                <a href="">
                    <i class="fa-brands fa-git-alt"></i>
                </a>
    
                <a href="">
                    <i class="fa-solid fa-file"></i>
                </a>
            
            
            </div> -->
</template>

<style lang="scss" scoped>
.formContainer {
    height: 93%;
    display: flex;
    align-items: center;
    justify-content: center;
}

form {
    label {
        font-size: 0.8rem;
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
        background-color: #010c16;
    }
    textarea {
        border: 2px solid #366686;
        border-radius: 5px;
        // ??
        width: 103%;
        background-color: #010c16;
    }
    input[type="submit"] {
        width: unset;
        padding: 0.3rem 0.5rem;
        background-color: #192f44;
    }
}

.ideCont {
    margin: 2rem;
    // padding: 2rem;
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

    h4 {
        padding: 2rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        font-weight: 600;
        font-size: larger;
    }
}

.contacts {
    display: flex;
    justify-content: space-between;
    align-items: center;

    i {
        font-size: 3rem;
    }
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
            // border-radius: 3px;
            position: relative;
            margin: 1rem;

            .arrowRight {
                position: absolute;
                top: 50%;
                left: 49%;
                transform: translate(-50%, -50%);
                font-size: 1.5rem;
            }
        }
    }
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
}</style>