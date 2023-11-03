<script>
import { store } from '../store';
import emailjs from 'emailjs-com';

export default {
    emits: ['goCenterfromLeft'],
    data() {
        return {
            store,
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
        <!-- form-------------- -->
        <form ref="form" @submit.prevent="sendEmail">
            <div class="container">
                <input type="text" name="user_name" class="d-block" placeholder="name">
                <input type="email" name="user_email" class="d-block" placeholder="surname">
            </div>
            <textarea name="message"  placeholder="Type your message."></textarea>
            <div class="lowerForm d-flex">        
                <input type="submit" value="Send">
            </div>
        </form>
        <!-- ----------------- -->
        <div class="contacts">
            <a href="">
                <i class="fa-brands fa-git-alt"></i>
            </a>
    
            <a href="">
                <i class="fa-solid fa-file"></i>
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
form {
    display: flex;
    justify-content: center;
    * {
        margin: 1rem;
    }
}
.ideCont {
    margin: 2rem;
    padding: 2rem;
    border: 2px solid #366686;
    border-radius: 5px;
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
}
</style>