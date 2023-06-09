// The file where the routes are defined and imported into the main.js file

import { createRouter, createWebHistory } from "vue-router";
import BlogTemplate from "@/BlogTemplate.vue";
import Home from "@/Home.vue";
import ProjectTemplate from "@/ProjectTemplate.vue"

const routes = [
    {
    path: "/",
    name: "Home",
    component: Home,
},
  {
    path: "/blog",
    name: "BlogTemplate",
    component: BlogTemplate,
    props: true,
  },
  {
    path: "/project-:slug",
    name: "ProjectTemplate",
    component: ProjectTemplate,
  }
  // Add more routes here
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;

