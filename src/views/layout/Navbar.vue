<template>
  <el-row class="navbar">
    <el-col :span="20" align="left">
      <on-off class="sidebar-onoff"/>
      <bread-crumb class="navbar-breadcrumb"/>
    </el-col>
    <el-col :span="4" align="right">
      <theme-picker/>
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
  .navbar {
    line-height: 50px;
    padding: 10px 10px 10px 10px;
    border-radius: 0px !important;
    background-color: #fff;
    .el-col{
      border-radius: 4px;
      line-height: 50px;
    }
    .sidebar-onoff {
      padding-right: 10px;
      float: left;
    }
    .navbar-breadcrumb {
      display: inline-block;
    }
  }
</style>
