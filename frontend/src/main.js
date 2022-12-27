import Vue from 'vue'
import App from './App.vue'

// import router from './router'
// Vue.use(router)

import callApi from './common/misc'

Vue.config.productionTip = false
Vue.mixin(callApi);

new Vue({
  render: h => h(App),
}).$mount('#app')
