import Vue from 'vue'
import App from './App.vue'

// import Router from 'vue-router';

import vuetify from './plugins/vuetify'



import router from './router.js'



import { BootstrapVue } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// import Vuelidate from 'vuelidate';
import store from './store/index';


// Vue.use(Vuelidate);
// Vue.use(routes);
Vue.use(BootstrapVue);



Vue.config.productionTip = false;


new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount('#app')