<template>
  <div class="wrapper-container">
    <Sidebar class="sidebar-container"/>
    <div class="right-container">
      <Navbar/>
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

  // 侧边栏
  .sidebar-container {
    width: 250px !important;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
  }

  // 右边栏
  .right-container {
    min-height: 100%;
    transition: margin-left .28s;
    margin-left: 250px;
    position: relative;
    background-color: #F5F5F5;
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

  .el-menu--vertical{
    & >.el-menu{
      .svg-icon{
        margin-right: 16px;
      }
    }
  }
}
</style>
