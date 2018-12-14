<template>
  <div id="app">
    home page
    <el-button type="primary">{{ $t('home.test') }}</el-button>
    <theme-picker class="theme-switch right-menu-item"/>
  </div>
</template>

<script>
import { Sidebar, Navbar, Main } from './layout'
import ThemePicker from '@/components/ThemePicker'

export default {
  name: 'App',
  components: {
    Navbar,
    Sidebar,
    Main,
    ThemePicker
  }
}
</script>

<style scoped>

</style>
