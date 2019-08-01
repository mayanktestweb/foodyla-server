import Vue from "vue";
import Vuetify from "vuetify";
import App from "./App.vue";
import VueSession from 'vue-session';

import router from "./router";
import store from "./store";

Vue.use(Vuetify);

var options = {
    persist: true
}

Vue.use(VueSession, options);

var app = new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app');