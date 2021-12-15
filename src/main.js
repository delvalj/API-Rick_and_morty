import {createApp} from 'vue';
import App from './App.vue';
import store from './store/index.js'

import {createRouter, createWebHistory} from 'vue-router'

import ListCharacters from "@/components/ListCharacters";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: ListCharacters
        },
        {
            path: '/ListCharacters',
            component: ListCharacters
        },
    ]
});


createApp(App).use(store).use(router).mount("#app");




