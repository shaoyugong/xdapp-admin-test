<template>
  <div class="wrapper-container" :class="classObj">
    <sidebar class="sidebar-container"/>
    <div class="right-container">
      <Navbar/>
      {{ classObj }}
      <Main/>
    </div>
  </div>
</template>

<script>
import { Navbar, Main } from './'
import sidebar from './sidebar'
import resize from './resize'

export default {
  name: 'Layout',
  components: {
    Navbar,
    sidebar,
    Main
  },
  mixins: [resize],
  computed: {
    classObj () {
      return {
        hideSidebar: this.$store.state.app.sidebar.status,
        openSidebar: !this.$store.state.app.sidebar.status,
        mobile: this.$store.state.app.device === 'mobile'
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
