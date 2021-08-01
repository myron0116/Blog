import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";

Vue.use(AOS);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

AOS.init({
  disable: window.innerWidth < 600
})