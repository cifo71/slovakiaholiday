import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Services from "./views/Services.vue";
import Slovakia from "./views/Slovakia.vue";
import Wellnes from "./views/Wellnes.vue";
import Alcoroads from "./views/Alcoroads.vue";
import Contactform from "./views/Contactform.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/services",
      name: "services",
      component: Services
    },
    {
      path: "/slovakia",
      name: "slovakia",
      component: Slovakia
    },
    {
      path: "/wellnes",
      name: "wellnes",
      component: Wellnes
    },
    {
      path: "/alcoroads",
      name: "alcoroads",
      component: Alcoroads
    },
    {
      path: "/contactform",
      name: "contactform",
      component: Contactform
    }
  ]
});
