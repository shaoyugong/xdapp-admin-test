<template>
  <div class="wrapper-container" :class="classObj">
    <sidebar class="sidebar-container" :is-collapse="isCollapse"/>
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
import { Navbar, Main } from './'
import sidebar from './sidebar'

export default {
  name: 'Layout',
  data () {
    return {
      isCollapse: false
    }
  },
  components: {
    Navbar,
    sidebar,
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
