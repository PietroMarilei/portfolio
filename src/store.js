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
                icon: "devicon-javascript-plain",
            },
            {
                name: 'Typescript',
                description: 'TypeScript is an advanced superset of JavaScript, adding static typing to the language. It enhances code maintainability and scalability by allowing developers to define variable types, catching errors early in development. TypeScript compiles down to JavaScript, making it compatible with existing JavaScript codebases while providing additional features like interfaces, classes, and modules, fostering robust and efficient software development.',
                icon: "devicon-typescript-plain",
            },

            {
                name: 'Vue.js',
                description: 'Vue.js is a progressive JavaScript framework for building user interfaces. It focuses on the view layer of web applications, providing a flexible and efficient way to create interactive components. Vue.js is known for its simplicity and ease of integration, making it an excellent choice for both small projects and large-scale applications.',
                icon: 'devicon-vuejs-plain',
            },
            {
                name: 'React',
                description: 'React is a powerful JavaScript library for building user interfaces, particularly for single-page applications. Developed by Facebook, React enables developers to create reusable UI components that efficiently update and render based on data changes. It employs a virtual DOM to optimize performance by minimizing actual DOM manipulations. React\'s declarative syntax and component- based architecture simplify the development process, allowing developers to efficiently build interactive and responsive web applications with ease.',
                icon: 'devicon-react-plain',
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
                name: 'Express.Js',
                description: 'Express is a flexible and minimalist web application framework for Node.js. It simplifies the process of building web applications and APIs by providing a robust set of features for handling HTTP requests, routing, middleware integration, and templating. With its lightweight and unopinionated design, Express allows developers to create scalable and modular web applications quickly and efficiently, making it a popular choice for building modern web servers and APIs in Node.js environments.',
                icon: 'devicon-express-plain',
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
                img: 'projectsImg/besport.jpg',
                description: 'A website dedicated to help you find the perfect personal trainer for you!',
                functionality: 'Use the search bar to find your trainer',
                link: 'https://michela30.github.io/be-sport-frontoffice/',
                languages: {
                    HTML: 'devicon-html5-plain',
                    CSS: 'devicon-css3-plain',
                    Javascript: 'devicon-bootstrap-plain',
                    Bootstrap: 'devicon-bootstrap-plain',
                    Vue: 'devicon-vuejs-plain',
                    PHP: 'devicon-php-plain',
                    MySQL: 'devicon-mysql-plain',
                    Laravel: 'devicon-laravel-plain',
                    Git: 'devicon-git-plain',
                }
            },
            {
                name: "CSV Analyzer",
                img: 'projectsImg/csv_analyzer.png',
                description: 'A php csv analyzer to detect epidemics by area and date',
                functionality: 'Try to filer the data from the csv and analyze it',
                link: 'https://pietromarilei.github.io/realMapsDeploy/index.html',
                languages: {
                    HTML: 'devicon-html5-plain',
                    CSS: 'devicon-css3-plain',
                    Javascript: 'devicon-bootstrap-plain',
                    Bootstrap: 'devicon-bootstrap-plain',
                    Vue: 'devicon-vuejs-plain',
                    PHP: 'devicon-php-plain',
                    MySQL: 'devicon-mysql-plain',

                    Git: 'devicon-git-plain',
                }
            },
            {
                name: "Wordpress Politic Promotion Website",
                img: 'projectsImg/ugo.png',
                description: 'A website for the electoral campaign of a European politician',
                functionality: 'A Wordpress complete experience',
                link: 'https://www.biggeri.eu/',
                languages: {
                    HTML: 'devicon-html5-plain',
                    CSS: 'devicon-css3-plain',
                    Wordpress: 'devicon-wordpress-plain',
                    MySQL: 'devicon-mysql-plain',

                    Git: 'devicon-git-plain',
                }
            },
            {
                name: "Weather React",
                img: 'projectsImg/weather.png',
                description: 'React app based on weather API',
                functionality: 'Type your location!',
                link: 'https://pietromarilei.github.io/Weather-React-dp/',
                languages: {
                    HTML: 'devicon-html5-plain',
                    CSS: 'devicon-css3-plain',
                    Javascript: 'devicon-javascript-plain',
                    Vue: 'devicon-vuejs-plain',
                    React: 'devicon-react-plain',
                    Git: 'devicon-git-plain',
                }
            },

            {
                name: "Netflix",
                img: 'projectsImg/netflix.jpg',
                description: 'Netflix and chill: here\'s a replica of the most known streaming platform made using TMDB API',
                functionality: 'Try search by genre and title',
                link: 'https://pietromarilei.github.io/vite-boolflix/',
                languages: {
                    HTML: 'devicon-html5-plain',
                    CSS: 'devicon-css3-plain',
                    Bootstrap: 'devicon-bootstrap-plain',
                    Javascript: 'devicon-javascript-plain',
                    Vue: 'devicon-vuejs-plain',
                    Git: 'devicon-git-plain',
                }
            },
            {
                name: "WhatsApp",
                img: 'projectsImg/whatsapp.jpg',
                description: 'WhatsApp web application replica with dark mode and search',
                functionality: 'Try dark mode or try write a message, it will not left you on read.',
                link: 'https://pietromarilei.github.io/vue-boolzapp/#',
                languages: {
                    HTML: 'devicon-html5-plain',
                    CSS: 'devicon-css3-plain',
                    Bootstrap: 'devicon-bootstrap-plain',
                    Javascript: 'devicon-javascript-plain',
                    Vue: 'devicon-vuejs-plain',
                    Git: 'devicon-git-plain',
                }
            },
            {
                name: "NexGen",
                img: 'projectsImg/midterm.jpg',
                description: 'A mokeup for a financial start-up NexGen',
                functionality: '',
                link: 'https://pietromarilei.github.io/proj-html-vuejs/',
                languages: {
                    HTML: 'devicon-html5-plain',
                    CSS: 'devicon-css3-plain',
                    Bootstrap: 'devicon-bootstrap-plain',
                    Javascript: 'devicon-javascript-plain',
                    Vue: 'devicon-vuejs-plain',
                    Git: 'devicon-git-plain',
                }
            },
            {
                name: "Comics",
                img: 'projectsImg/comics.jpg',
                description: 'A Comics world, in single web page replica',
                functionality: '',
                link: 'https://pietromarilei.github.io/vite-comics/',
                languages: {
                    HTML: 'devicon-html5-plain',
                    CSS: 'devicon-css3-plain',
                    Javascript: 'devicon-bootstrap-plain',
                    Bootstrap: 'devicon-bootstrap-plain',
                    Javascript: 'devicon-javascript-plain',
                    Vue: 'devicon-vuejs-plain',
                    Git: 'devicon-git-plain',
                }
            },
            {
                name: "Zalando",
                img: 'projectsImg/zalando.jpg',
                description: 'Want to buy a new cozy sweater?',
                functionality: '',
                link: 'https://pietromarilei.github.io/html-css-boolando/',
                languages: {
                    HTML: 'devicon-html5-plain',
                    CSS: 'devicon-css3-plain',
                    Javascript: 'devicon-javascript-plain',
                    Git: 'devicon-git-plain',
                }
            },
            {
                name: "Dropbox",
                img: 'projectsImg/dropbox.jpg',
                description: 'A css pratice to replicate the place where you forgot you have 2010 photos',
                functionality: '',
                link: 'https://pietromarilei.github.io/html-css-boolando/',
                languages: {
                    HTML: 'devicon-html5-plain',
                    CSS: 'devicon-css3-plain',
                    Bootstrap: 'devicon-bootstrap-plain',
                    Javascript: 'devicon-javascript-plain',
                    Git: 'devicon-git-plain',
                }
            },
            {
                name: "Discord",
                img: 'projectsImg/discord.jpg',
                description: 'The discord web page replica in Html and Css',
                functionality: '',
                link: 'https://pietromarilei.github.io/html-css-boolando/',
                languages: {
                    HTML: 'devicon-html5-plain',
                    CSS: 'devicon-css3-plain',
                    Bootstrap: 'devicon-bootstrap-plain',
                    Git: 'devicon-git-plain',
                }
            },

        ]
    },
)
