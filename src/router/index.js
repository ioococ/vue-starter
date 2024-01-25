import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TestView from "../views/TestView.vue";
import ListView from "../views/ListView.vue";
import Aa from "../views/etc/A.vue";
import Bb from "../views/etc/B.vue";
import Cc from "../views/etc/C.vue";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/test", name: "TestView", component: TestView,
    childern: [
      { path: "a", component: Aa },
      { path: "b", component: Bb },
      { path: "c", component: Cc },
    ]},
  { path: "/list", name: "ListView", component: ListView},
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
