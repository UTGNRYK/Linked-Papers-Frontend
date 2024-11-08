// @ts-ignore
import {createRouter, createWebHashHistory} from "vue-router"

// @ts-ignore
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        {
            path: '/home',
            // @ts-ignore
            component: () => import('../views/HomePage.vue'),
            meta: {title: 'Home'}
        },
    ]
})

export {router}
