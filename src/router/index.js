import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Account from '@/components/Account'
import Storage from "@/components/Storage";
import Task from "@/components/Task";
import Info from "@/components/Info";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: '/account',
        name: 'account',
        component: Account,
    },
    {
        path: '/storage',
        name: 'storage',
        component: Storage,
    },
    {
        path: '/task',
        name: 'task',
        component: Task,
    },
    {
        path: '/info',
        name: 'info',
        component: Info,
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router
