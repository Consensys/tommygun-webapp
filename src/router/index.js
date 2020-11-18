import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Account from '@/components/Account'
import Storage from "@/components/Storage";
import Task from "@/components/Task";

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
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router
