import {createApp} from 'vue';
import App from './App.vue';
import store from './store/index.js'

import {createRouter, createWebHistory} from 'vue-router'

import ListCharacters from "@/components/ListCharacters";
import locations from "@/Views/locations";
import MainMenu from "@/Views/Users";
import Formulario from "@/Views/Formulario";
import UserAuth from "@/Auth/UserAuth";


const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        component: MainMenu
        },
        {
            path: '/ListCharacters',
            component: ListCharacters
        },
        {
            path: '/locations',
            component: locations
        },
        {
            path: '/Formulario',
            component: Formulario
        },
        {
            path: '/Auth',
            component: UserAuth
        },

        // {
        //     path: '/:notFound(.*)',
        //     component: NotFound
        // }
    ]
});


createApp(App).use(store).use(router).mount("#app");




