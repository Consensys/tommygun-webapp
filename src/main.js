import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import router from './router'
import TaskService from "../services/TaskService";
import FireService from "../services/FireService";
import StateService from "../services/StateService";
import AccountService from "../services/AccountService";
import InfoService from "../services/InfoService";

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(VueRouter);

// create store
const store = new Vuex.Store({
    state: {
        settings: {
            backend: {
                url: 'http://127.0.0.1:8080',
                taskAPIRoot: 'task/',
                fireAPIRoot: 'fire',
                stateAPIRoot: 'state',
                accountAPIRoot: 'account',
            }
        },
    },
    mutations: {}
});

store.state.services = services(store.state.settings);

new Vue({
    router,
    render: h => h(App),
    store,
}).$mount('#app');

router.push({path: '/'});

function services(settings) {
    return {
        task: new TaskService(settings),
        fire: new FireService(settings),
        state: new StateService(settings),
        account: new AccountService(settings),
        info: new InfoService(settings),
    };
}