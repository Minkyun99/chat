import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/https://web-chat-32updzt2alpp3tqt2.sel4.cloudtype.app",
    name: "home",
    component: HomeView,
  },
  {
    path: "https://web-chat-32updzt2alpp3tqt2.sel4.cloudtype.app/about",
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
