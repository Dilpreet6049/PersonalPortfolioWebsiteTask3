import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

let router = new VueRouter({
    // mode: 'history',
    routes:[
        {path:'/',  name:'Landing', component: () =>import('./components/Lander')},
        {path:'/about',  name:'About', component: () =>import('./components/About')},
        {path:'/contact',  name:'Contact', component: () =>import('./components/Contact')},
        
    ]
});

export default router;