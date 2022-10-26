import { createRouter, createWebHistory } from "vue-router";
import GamesView from "@/views/GamesView";
import DetailView from "@/views/DetailView";

const routes = [
  {
    path: "/",
    name: "Games",
    component: GamesView,
  },
  {
    path: "/games/:id",
    name: "DetailView",
    component: DetailView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
