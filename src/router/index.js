import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/toggle",
    name: "toggle",
    component: () => import("../views/Toggle.vue")
  },
  {
    path: "/peekaboo",
    name: "peekaboo",
    component: () => import("../views/Peekaboo.vue")
  },
  {
    path: "/font-sizer",
    name: "font-sizer",
    component: () => import("../views/FontSizer.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
