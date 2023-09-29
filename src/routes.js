import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import UpPgae from 



const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/UpPage',
        name: 'UpPage',
        component: UpPage,
    },
   

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;