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
