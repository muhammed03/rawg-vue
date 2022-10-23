import { createRouter, createWebHistory } from "vue-router";
import GamesView from "@/views/GamesView";

const routes = [
  {
    path: "/",
    name: "home",
    component: GamesView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
