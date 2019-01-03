import Vue from 'vue'
import Vuex from 'vuex'
import theme from './modules/theme' // 样式模块

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    theme
  }
})

export default store
