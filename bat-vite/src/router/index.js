import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
const routes = [
    {
        path: '/',
        redirect: '/overview'
    },
    {
        path: "/",
        name: "Home",
        component: Home,
        children: [
            {
                path: "/overview",
                name: "overview",
                meta: { title: "Overview" },
                component: () => import("../views/Overview.vue")
            },
            {
                path: "/userdata",
                name: "userdata",
                meta: {
                    title: 'UserData'
                },
                component: () => import( /* webpackChunkName: "UserData" */ "../views/UserData.vue")
            }, {
                path: "/videos",
                name: "videos",
                meta: {
                    title: 'Videos'
                },
                component: () => import( /* webpackChunkName: "Videos" */ "../views/Videos.vue")
            }]
    },
    {
        path: "/login",
        name: "Login",
        meta: {
            title: '登录'
        },
        component: () => import( /* webpackChunkName: "login" */ "../views/Login.vue")
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | vue-manage-system`;
    const role = localStorage.getItem('ms_username');
    if (!role && to.path !== '/login') {
        next('/login');
    } else if (to.meta.permission) {
        // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
        role === 'wesley'
            ? next()
            : next('/403');
    } else {
        next();
    }
});

export default router;