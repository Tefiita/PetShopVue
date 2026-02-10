import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NosotrosView from "@/views/NosotrosView.vue";

const routes = [
  {
    path: "/",
    name: "homeView",
    component: HomeView,
  },
  {
    path: "/nosotrosView",
    name: "nosotrosView",
    component: NosotrosView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
