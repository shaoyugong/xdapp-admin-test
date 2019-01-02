<template>
  <div class="wrapper-container" :class="classObj">
    <Sidebar class="sidebar-container" :is-collapse="isCollapse"/>
    <div class="right-container">
      <el-radio-group v-model="isCollapse">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
      <Navbar/>
      <Main/>
    </div>
  </div>
</template>

<script>
import { Sidebar, Navbar, Main } from './'

export default {
  name: 'Layout',
  data () {
    return {
      isCollapse: false
    }
  },
  components: {
    Navbar,
    Sidebar,
    Main
  },
  computed: {
    classObj () {
      return {
        hideSidebar: this.isCollapse,
        openSidebar: !this.isCollapse
      }
    }
  }
}
</script>
