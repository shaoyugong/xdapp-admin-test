<template>
  <div class="wrapper-container" :class="classObj">
    <sidebar class="sidebar-container"/>
    <div class="right-container">
      <Navbar/>
      <Main/>
    </div>
  </div>
</template>

<script>
import { Navbar, Main } from './'
import sidebar from './sidebar'

export default {
  name: 'Layout',
  components: {
    Navbar,
    sidebar,
    Main
  },
  computed: {
    classObj () {
      return {
        hideSidebar: this.$store.state.app.sidebar.status,
        openSidebar: !this.$store.state.app.sidebar.status
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~@/assets/css/mixin.scss";

.wrapper-container {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  &.mobile.openSidebar{
    position: fixed;
    top: 0;
  }
}
</style>
