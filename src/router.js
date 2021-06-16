import Vue from 'vue';
import VueRouter from 'vue-router';
//import Router from 'vue-router';


import CoachesList from './pages/coaches/CoachesList.vue';
import CoachDetail from './pages/coaches/CoachDetail.vue';

import CoachRegistation from './pages/coaches/CoachRegistration.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';



Vue.use(VueRouter);

let routes = [{
        path: '/',
        redirect: '/coaches-list'

    },
    {
        path: '/coaches-list',
        name: 'CoachesList',
        component: CoachesList
    },
    {
        path: '/coach-detail',
        name: 'CoachDetail',
        component: CoachDetail,
        children: [{
                path: 'contact',
                name: 'ContactCoach',
                component: ContactCoach
            } // /coaches/c1/contact
        ]
    },

    { path: '/registation', name: 'CoachRegistation', component: CoachRegistation },
    { path: '/requests-received', name: 'RequestsReceived', component: RequestsReceived },
    { path: '/:notFound(.*)', component: NotFound }




];

const router = new VueRouter({
    mode: 'history',

    routes
})


export default router;