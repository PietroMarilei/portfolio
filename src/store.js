import { reactive } from "vue";

export const store = reactive(
    {
        skills: [
            {
                name: 'HTML',
                description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas dolor maxime distinctio reprehenderit alias repudiandae! Esse, vero doloremque! Maxime, necessitatibus? Minima, temporibus! Natus accusantium sunt velit porro, et voluptatum sint?',
                icon: 'devicon-html5-plain',
            },
            {
                name: '(S)CSS',
                description: 'CSSSSSSSSLorem ipsum, dolor sit amet consectetur adipisicing elit. Quas dolor maxime distinctio reprehenderit alias repudiandae! Esse, vero doloremque! Maxime, necessitatibus? Minima, temporibus! Natus accusantium sunt velit porro, et voluptatum sint?',
                icon: 'devicon-css3-plain',
            },
            {
                name: 'Bootstrap',
                description: 'CSSSSSSSSLorem ipsum, dolor sit amet consectetur adipisicing elit. Quas dolor maxime distinctio reprehenderit alias repudiandae! Esse, vero doloremque! Maxime, necessitatibus? Minima, temporibus! Natus accusantium sunt velit porro, et voluptatum sint?',
                icon: 'devicon-bootstrap-plain',
            },
            {
                name: 'Javascript',
                description: 'CSSSSSSSSLorem ipsum, dolor sit amet consectetur adipisicing elit. Quas dolor maxime distinctio reprehenderit alias repudiandae! Esse, vero doloremque! Maxime, necessitatibus? Minima, temporibus! Natus accusantium sunt velit porro, et voluptatum sint?',
                icon:  "devicon-javascript-plain" ,
            },

            {
                name: 'Vue.js',
                description: 'CSSSSSSSSLorem ipsum, dolor sit amet consectetur adipisicing elit. Quas dolor maxime distinctio reprehenderit alias repudiandae! Esse, vero doloremque! Maxime, necessitatibus? Minima, temporibus! Natus accusantium sunt velit porro, et voluptatum sint?',
                icon: 'devicon-vuejs-plain',
            },
            {
                name: 'PHP',
                description: 'CSSSSSSSSLorem ipsum, dolor sit amet consectetur adipisicing elit. Quas dolor maxime distinctio reprehenderit alias repudiandae! Esse, vero doloremque! Maxime, necessitatibus? Minima, temporibus! Natus accusantium sunt velit porro, et voluptatum sint?',
                icon: 'devicon-php-plain',
            },
            {
                name: 'MySQL',
                description: 'CSSSSSSSSLorem ipsum, dolor sit amet consectetur adipisicing elit. Quas dolor maxime distinctio reprehenderit alias repudiandae! Esse, vero doloremque! Maxime, necessitatibus? Minima, temporibus! Natus accusantium sunt velit porro, et voluptatum sint?',
                icon: 'devicon-mysql-plain',
            },
            {
                name: 'Laravel',
                description: 'CSSSSSSSSLorem ipsum, dolor sit amet consectetur adipisicing elit. Quas dolor maxime distinctio reprehenderit alias repudiandae! Esse, vero doloremque! Maxime, necessitatibus? Minima, temporibus! Natus accusantium sunt velit porro, et voluptatum sint?',
                icon: 'devicon-laravel-plain',
            },
            {
                name: 'Git',
                description: 'CSSSSSSSSLorem ipsum, dolor sit amet consectetur adipisicing elit. Quas dolor maxime distinctio reprehenderit alias repudiandae! Esse, vero doloremque! Maxime, necessitatibus? Minima, temporibus! Natus accusantium sunt velit porro, et voluptatum sint?',
                icon: 'devicon-git-plain',
            },

        ],
    },
)

//could use Pinia ora Vuex