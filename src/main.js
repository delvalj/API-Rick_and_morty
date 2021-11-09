import {createApp} from 'vue';
import App from './App.vue';
import store from './store/index.js'

import {createRouter, createWebHistory} from 'vue-router'

import ListCharacters from "@/components/ListCharacters";
import locations from "@/Views/locations";
import MainMenu from "@/Views/MainMenu";


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
    ]
});


createApp(App).use(store).use(router).mount("#app");




