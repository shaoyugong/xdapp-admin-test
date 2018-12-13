// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Element from './config/element'
import i18n from './config/i18n'
import store from './config/store'
import router from './config/router'

Vue.use(Element, {
  i18n: (key, value) => i18n.t(key, value) // element加入多语言
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
