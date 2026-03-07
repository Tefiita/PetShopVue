import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NosotrosView from "../views/NosotrosView.vue";
import AlimentoPerroView from "../views/AlimentoPerroView.vue";
import AlimentoGatoView from "../views/AlimentoGatoView.vue";
import ZeeDogView from "../views/ZeeDogView.vue";
import ZeeCatView from "../views/ZeeCatView.vue";
import SnacksView from "../views/SnacksView.vue";
import ArenasView from "../views/ArenasView.vue";
import JuguetesView from "../views/JuguetesView.vue";
import CarritoView from "../views/CarritoView.vue";

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
  {
    path: "/alimentoPerroView",
    name: "alimentoPerroView",
    component: AlimentoPerroView,
  },
  {
    path: "/alimentoGatoView",
    name: "alimentoGatoView",
    component: AlimentoGatoView,
  },
  {
    path: "/zeeDogView",
    name: "zeeDogView",
    component: ZeeDogView,
  },
  {
    path: "/zeeCatView",
    name: "zeeCatView",
    component: ZeeCatView,
  },
  {
    path: "/arenasView",
    name: "arenasView",
    component: ArenasView,
  },
  {
    path: "/snacksView",
    name: "snacksView",
    component: SnacksView,
  },
  {
    path: "/juguetesView",
    name: "juguetesView",
    component: JuguetesView,
  },
  {
    path: "/carritoView",
    name: "carritoView",
    component: CarritoView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
