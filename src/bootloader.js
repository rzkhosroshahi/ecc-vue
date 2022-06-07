import Vue from "vue";
import router from './router';
import VueRouter from 'vue-router';
import App from "./App.vue";
import "./index.css";

Vue.use(VueRouter);

new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App },
});

