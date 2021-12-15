import {createApp} from 'vue';
import App from './App.vue';
import store from './store/index.js'

import {createRouter, createWebHistory} from 'vue-router'

import ListCharacters from "@/components/ListCharacters";
import locations from "@/Views/locations";
import UserAuth from "@/Auth/UserAuth";

// import MainMenu from "@/Views/Users";
// import Formulario from "@/Views/Formulario";
// import Albums from "@/Views/Albums";
// import NBA from "@/Views/NBA";


const router = createRouter({
    history: createWebHistory(),
    routes: [

        {
            path: '/ListCharacters',
            component: ListCharacters
        },
        {
            path: '/locations',
            component: locations
        },
        {
            path: '/Auth',
            component: UserAuth
        },
        // {
        //     path: '/Formulario',
        //     component: Formulario
        // },
        // {
        // path: '/',
        // component: MainMenu
        // },
        // {
        //     path: '/:notFound(.*)',
        //     component: NotFound
        // }
    ]
});


createApp(App).use(store).use(router).mount("#app");




