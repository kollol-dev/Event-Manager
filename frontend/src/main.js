import Vue from 'vue'
import Router from "vue-router";
import App from './App.vue'
import callApi from './common/misc'
import routes from './routes'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

// import './assets/less/custom.less';

Vue.use(Router);
Vue.use(ViewUI)

const router = new Router({
  mode: "history",
  routes,
});

Vue.config.productionTip = false
Vue.mixin(callApi);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
