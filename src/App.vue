<template>
  <div id="app">
    <img src="./assets/img/logo.png">
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button type="primary">{{ $t('home.test') }}</el-button>
      <theme-picker class="theme-switch right-menu-item"/>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './views/HelloWorld.vue'
import ThemePicker from '@/components/ThemePicker'

export default {
  name: 'app',
  components: {
    HelloWorld,
    ThemePicker
  }
}
</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
