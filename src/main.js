import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Buefy from 'buefy';
import 'buefy/dist/buefy.css'
import Mdi from "material-design-icons";

Vue.use(Buefy);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  Mdi,
  render: h => h(App)
}).$mount("#app");
