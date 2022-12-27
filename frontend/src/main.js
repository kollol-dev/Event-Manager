import Vue from 'vue'
import App from './App.vue'

import callApi from './common/misc'

Vue.config.productionTip = false
Vue.mixin(callApi);

new Vue({
  render: h => h(App),
}).$mount('#app')
