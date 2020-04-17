import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import Login from "@/views/Login.vue";
// import SingUp from "@/components/Cadastro.vue";
import NotFound from "../views/NotFound.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue")
  },
  {
    path: "/cadastro",
    name: "Cadastro",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SingUp.vue")
  }, {
    path: "/dashboard",
    name: "Dashboard",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Dashboard.vue")
  },
 
  {
    path: "/404",
    name: "notFound.index",
    component: NotFound
  },
  { path: "*", redirect: "/404" },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});
// base: process.env.BASE_URL,

export default router;
