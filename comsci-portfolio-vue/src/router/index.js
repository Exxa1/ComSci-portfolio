// The file where the routes are defined and imported into the main.js file

import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import ProjectTemplate from "@/components/ProjectTemplate.vue"
import NotFound from "@/components/NotFound.vue"
import Portfolio from "@/components/Portfolio.vue"

import Postcard from "@/components/postcard.vue"

const routes = [
    // will match everything and put it under `$route.params.pathMatch`
    { path: '/:pathMatch(.*)*',
     name: 'NotFound',
      component: NotFound },
    {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/project-:slug",
    name: "ProjectTemplate",
    component: ProjectTemplate,
  },
  {
    path: "/amy-birthday",
    name: "Postcard",
    component: Postcard,
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio,
  }
  // Add more routes here
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;

