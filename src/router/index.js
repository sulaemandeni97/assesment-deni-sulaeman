import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import ListMovie from "../views/list-movie/ListMovie.vue";
import DetailMovie from "../views/detail-movie/Detail.vue";
import PlayMovie from "../views/play-movie/PlayMovie.vue";
const routes = [
  {
    path: "/list-movie",
    name: "list-movie",
    component: ListMovie,
    meta: {},
  },
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {},
  },
  {
    path: "/detail-movie",
    name: "detail-movie",
    component: DetailMovie,
    meta: {},
  },
  {
    path: "/play-movie",
    name: "play-movie",
    component: PlayMovie,
    meta: {},
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
