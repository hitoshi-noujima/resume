import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Work from '@/views/Work.vue';
import NotFound from '@/views/NotFound.vue';
import dotenv from 'dotenv';
dotenv.config();

Vue.use(VueRouter);

const DEFAULT_TITLE = process.env.VUE_APP_USERNAME;

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/work',
        name: 'work',
        component: Work,
        meta: { title: '職務経歴書' }
    },
    {
        path: '/*',
        name: 'notFound',
        component: NotFound,
        meta: { title: '404' }
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    }
});

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        const pageTitle = `${to.meta.title} | ${DEFAULT_TITLE}`;
        document.title = pageTitle;
    } else {
        document.title = DEFAULT_TITLE;
    }
    next();
});

export default router;
