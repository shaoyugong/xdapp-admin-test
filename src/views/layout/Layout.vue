<template>
  <div class="app-wrapper">
    <Sidebar class="sidebar-container"/>
    <div class="main-container">
      <Navbar class="navbar"/>
      <Main/>
    </div>
  </div>
</template>

<script>
import { Sidebar, Navbar, Main } from './'

export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    Main
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  #app {
    // 主体区域
    .main-container {
      min-height: 100%;
      transition: margin-left .28s;
      margin-left: 250px;
      position: relative;
    }
    // 侧边栏
    .sidebar-container {
      transition: width 0.28s;
      width: 250px !important;
      height: 100%;
      position: fixed;
      font-size: 0px;
      top: 0;
      bottom: 0;
      left: 0;
      z-index: 1001;
      overflow: hidden;
    }
    .navbar {
      width:100%;
      height: 50px;
      line-height: 50px;
      border-radius: 0px !important;
      z-index: 1001;
      position: fixed;
    }
    //适配移动端
    .mobile {
      .main-container {
        margin-left: 0px;
      }
      .sidebar-container {
        transition: transform .28s;
        width: 180px !important;
      }
      &.hideSidebar {
        .sidebar-container {
          transition-duration: 0.3s;
          transform: translate3d(-180px, 0, 0);
        }
      }
    }
    .withoutAnimation {
      .main-container,
      .sidebar-container {
        transition: none;
      }
    }
  }
  .el-menu--vertical{
    & >.el-menu{
      .svg-icon{
        margin-right: 16px;
      }
    }
  }
</style>
