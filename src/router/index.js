import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Tazon from "../views/productos/Tazon.vue";
import Botella from "../views/productos/Botella.vue";
import Mousepad from "../views/productos/Mousepad.vue";
import Fotoroca from "../views/productos/Fotoroca.vue";
import Shopero from "../views/productos/Shopero.vue";

const routes = [
  // RUTAS HEADER
  {
    path: "/",
    name: "home",
    component: Home,
  },

  // RUTAS PRODUCTOS
  {
    path: "/productos/tazon",
    name: "tazon",
    component: Tazon,
  },
  {
    path: "/productos/botella",
    name: "botella",
    component: Botella,
  },
  {
    path: "/productos/mousepad",
    name: "mousepad",
    component: Mousepad,
  },
  {
    path: "/productos/fotoroca",
    name: "fotoroca",
    component: Fotoroca,
  },
  {
    path: "/productos/shopero",
    name: "shopero",
    component: Shopero,
  },
  // FIN RUTAS PRODUCTOS

  // RUTAS FOOTER

  // FIN RUTAS FOOTER
  // RUTA NO EXISTENTE REDIRIGE A HOME
  {
    path: "/:pathMatch(.*)*",
    name: "not_found",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from) => {
  document.title = to.meta?.title ?? "Level Up Estampados";
});

export default router;
