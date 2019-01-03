// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Element from './config/element'
import i18n from './lang'
import store from './store'
import router from './router'

Vue.use(Element, {
  i18n: (key, value) => i18n.t(key, value) // element加入多语言
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
