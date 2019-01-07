import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app' // app基础
import theme from './modules/theme' // 样式模块

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    theme
  }
})

export default store
