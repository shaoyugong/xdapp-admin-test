<template>
  <el-row class="navbar-container">
    <el-col :span="12" align="left">
      <on-off class="sidebar-onoff"/>
      <bread-crumb/>
    </el-col>
    <el-col :span="12" align="right">
      <theme-picker class="theme-switch right-menu-item breadcrumb"/>
    </el-col>
  </el-row>
</template>

<script>
import BreadCrumb from '@/components/breadcrumb'
import ThemePicker from '@/components/ThemePicker'
import onOff from './sidebar/onoff'

export default {
  name: 'Navbar',
  components: {
    ThemePicker,
    BreadCrumb,
    onOff
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  // 顶栏
  .navbar-container {
    padding: 10px 10px 10px 10px;
    border-radius: 0px !important;
    // background-color: $--color-primary;
    background-color: #fff;
    .el-col{
      border-radius: 4px;
      line-height: 60px;
      .el-breadcrumb {
        display: inline-block;
      }
    }
    .sidebar {
      width: 64px;
      height: 64px;
    }

    .sidebar-onoff {
      padding-right: 10px;
      float: left;
    }
  }
</style>
