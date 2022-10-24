import { createRouter, createWebHistory } from "vue-router";
import GamesView from "@/views/GamesView";
import GameDetailView from "@/views/GameDetailView";

const routes = [
  {
    path: "/",
    name: "Games",
    component: GamesView,
  },
  {
    path: "/games/:id",
    name: "GameDetailView",
    component: GameDetailView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
