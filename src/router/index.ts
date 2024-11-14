import {createRouter, createWebHashHistory} from "vue-router"

const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
        path: '/',
        redirect: '/login',
    }, {
        path: '/login',
        component: () => import('../views/user/Login.vue'),
        meta: {title: '用户登录'}
    }, {
        path: '/register',
        component: () => import('../views/user/Register.vue'),
        meta: {title: '用户注册'}
    }, {
        path: '/home',
        redirect: '/search',
        component: () => import('../views/Home.vue'),
        children: [
            {
                path: '/search',
                name: 'search',
                component: () => import('../views/paper/Search.vue'),
                meta: {title: '主页'}
            },
            {
                path: '/paperDetail/:storeId',
                name: 'paperDetail',
                component: () => import('../views/paper/PaperDetail.vue'),
                meta: {title: '论文详情'}
            },
            {
                path: '/citedPaperList/:storeId',
                name: 'citedPaperList',
                component: () => import('../views/paper/CitedPaperList.vue'),
                meta: {title: '引用论文列表'}
            },
            {
                path: '/relatedPaperList/:storeId',
                name: 'relatedPaperList',
                component: () => import('../views/paper/RelatedPaperList.vue'),
                meta: {title: '相关论文列表'}
            },
            {
                path: '/similarPaperList/:storeId',
                name: 'similarPaperList',
                component: () => import('../views/paper/SimilarPaperList.vue'),
                meta: {title: '同类论文列表'}
            },
        ]
    }, {
        path: '/404',
        name: '404',
        component: () => import('../views/NotFound.vue'),
        meta: {title: '404'}
    }, {
        path: '/:catchAll(.*)',
        redirect: '/404'
    }]
})

router.beforeEach((to, _, next) => {
    const token: string | null = sessionStorage.getItem('token')
    const role: string | null = sessionStorage.getItem('role')
    const storeId: string | null = sessionStorage.getItem('storeId')

    if (to.meta.title) {
        document.title = to.meta.title
    }

    if (!token) {
        if (to.path === '/login' || to.path === '/register') {
            next()
        } else {
            next('/login')
        }
        return
    }

    if (to.meta.permission && !to.meta.permission.includes(role!)) {
        next('/404')
        return
    }

    if (to.name === 'createProduct' && to.params.storeId !== storeId) {
        next('/404')
        return
    }

    next()
})


export {router}
