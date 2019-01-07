<template>
  <el-row class="navbar-container">
    <el-col :span="12" align="left">
      <on-off/>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
    <el-col :span="12" align="right">
      <theme-picker class="theme-switch right-menu-item breadcrumb"/>
    </el-col>
  </el-row>
</template>

<script>
import ThemePicker from '@/components/ThemePicker'
import onOff from './sidebar/onoff'

export default {
  name: 'Navbar',
  components: {
    ThemePicker,
    onOff
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  // @import '@/assets/css/element-ui.scss';

  // 顶栏
  .navbar-container {
    padding: 10px 10px 10px 10px;
    border-radius: 0px !important;
    // background-color: $--color-primary;
    background-color: #fff;
    .el-col{
      border-radius: 4px;
      line-height: 50px;
      .el-breadcrumb {
        display: inline-block;
      }
    }
    .sidebar {
      width: 64px;
      height: 64px;
    }
  }
</style>
