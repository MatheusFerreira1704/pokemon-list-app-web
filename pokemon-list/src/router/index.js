import Vue from "vue";
import VueRouter from "vue-router";
import Inicio from "../views/Inicio.vue";
import PokemonLista from "../views/PokemonLista.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Inicio",
    component: Inicio,
  },
  {
    path: "/PokemonLista",
    name: "PokemonLista",
    component: PokemonLista,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
