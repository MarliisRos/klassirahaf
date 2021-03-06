import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from "@/views/Login";
import Moderator from "@/views/Moderator";
import RegisterView from "@/views/RegisterView";
import ParentView from "@/views/ParentView";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'homeRoute',
        component: HomeView
    },

    {
        path: '/login',
        name: 'loginRoute',
        component: Login
    },


    {
        path: '/register',
        name: 'registerRoute',
        component: RegisterView
    },

    {
        path: '/moderator',
        name: 'moderatorRoute',
        component: Moderator
    },



    {
        path: '/parent',
        name: 'parentRoute',
        component: ParentView
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
            return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
        }
    }
]

const router = new VueRouter({
    routes
})

export default router
