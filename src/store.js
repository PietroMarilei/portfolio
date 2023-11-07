import { reactive } from "vue";

export const store = reactive(
    {
        skills: [
            {
                name: 'HTML',
                description: 'HTML, or HyperText Markup Language, serves as the backbone of web content. It provides the structural foundation for web pages, defining elements such as headings, paragraphs, links, and images. As a markup language, HTML enables the organization and presentation of information on the internet, acting as a fundamental building block for web development.',
                icon: 'devicon-html5-plain',
            },
            {
                name: '(S)CSS',
                description: '(SCSS), or Cascading Style Sheets, is a styling language that complements HTML by controlling the visual presentation of web pages. SCSS extends CSS with features like variables and nested rules, making stylesheets more maintainable and modular. It plays a crucial role in defining the layout, colors, and typography to enhance the user experience.',
                icon: 'devicon-css3-plain',
            },
            {
                name: 'Bootstrap',
                description: 'Bootstrap is a front-end framework that simplifies web development by providing a set of pre-designed components and styles. Developed by Twitter, Bootstrap streamlines the creation of responsive, mobile-friendly websites. It includes a grid system, navigation bars, modals, and other UI elements, allowing developers to build visually appealing and consistent interfaces.',
                icon: 'devicon-bootstrap-plain',
            },
            {
                name: 'Javascript',
                description: 'JavaScript is a versatile scripting language primarily used for client-side web development. It enables dynamic content, interactivity, and manipulation of the Document Object Model (DOM). JavaScript is a key component in creating modern, interactive web applications, often used in conjunction with HTML and CSS to deliver a seamless user experience.',
                icon:  "devicon-javascript-plain" ,
            },

            {
                name: 'Vue.js',
                description: 'Vue.js is a progressive JavaScript framework for building user interfaces. It focuses on the view layer of web applications, providing a flexible and efficient way to create interactive components. Vue.js is known for its simplicity and ease of integration, making it an excellent choice for both small projects and large-scale applications.',
                icon: 'devicon-vuejs-plain',
            },
            {
                name: 'PHP',
                description: 'PHP, Hypertext Preprocessor, is a server-side scripting language designed for web development. It facilitates the creation of dynamic web pages by embedding code within HTML. PHP is widely used for tasks such as form processing, database management, and server-side scripting, making it a cornerstone of back-end development.',
                icon: 'devicon-php-plain',
            },
            {
                name: 'MySQL',
                description: 'MySQL is an open-source relational database management system (RDBMS) that stores and manages structured data. It is a popular choice for web applications, providing scalability, reliability, and robust support for SQL queries. MySQL is often integrated with server-side languages like PHP to create dynamic, data-driven websites.',
                icon: 'devicon-mysql-plain',
            },
            {
                name: 'Laravel',
                description: 'Laravel is a PHP web application framework known for its elegant syntax and developer-friendly features. It follows the model-view-controller (MVC) pattern, streamlining the development process and promoting code organization. Laravel includes built-in tools for tasks such as routing, authentication, and database management, making it a powerful choice for building modern web applications.',
                icon: 'devicon-laravel-plain',
            },
            {
                name: 'Git',
                description: 'Git is a distributed version control system that enables efficient and collaborative software development. It tracks changes in source code, allowing multiple developers to work on a project simultaneously without conflicts. Git\'s branching and merging capabilities provide a robust system for managing codebase versions, fostering collaboration and ensuring project integrity.',
                icon: 'devicon-git-plain',
            },

        ],
        projects: [
            {
                name: "Be-Sport",
                img: '/projectsImg/01_besport.jpg',
                test: '01_besport.jpg',
                description: 'A website dedicated to help you find the perfect personal trainer for you!'
            },
            {
                name: "Netflix",
                img: '/projectsImg/03_netflix.jpg',
                test: '01_besport.jpg',
                description: 'Netflix and chill, but it\'s a replica'
            }, 
            {
                name: "What's App",
                img: '/projectsImg/04_whatsapp.jpg',
                test: '01_besport.jpg',
                description: 'Try write a message, it will not left you on read &#10003; '
            },
            {
                name: "NexGen",
                img: '/projectsImg/02_midterm.jpg',
                test: '01_besport.jpg',
                description: 'Need financial advisory? A web page can\'t help you'
            }
        ]
    },
)
