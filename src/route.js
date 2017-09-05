import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/home.vue";

Vue.use( VueRouter );

const routes = [
    {
        name: "home",
        path: "/",
        component: Home
    },
    {
        path: "*",
        component: Home
    },
];

const router = new VueRouter({
    mode: 'hash',
    routes: routes
});


export default router;