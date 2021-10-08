import {createRouter, createWebHistory, RouterOptions} from "vue-router";

import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },{
    path: "/about",
    name: "About",
    component: About
  }
]

const routerOptions = {
  history: createWebHistory(),
  routes
} as RouterOptions

const router = createRouter(routerOptions)

export default router
