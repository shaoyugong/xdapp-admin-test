<template>
  <el-menu
    :show-timeout="200"
    :default-active="$route.path"
    :collapse="this.$props.isCollapse"
    @open="handleOpen"
    @close="handleClose"
    mode="vertical"
    background-color="#304156"
    text-color="#bfcbd9"
    active-text-color="#409EFF">

    <el-submenu v-for="route in routers" :key="route.path" :base-path="route.path" index="1">
      <template slot="title">
        <i :class="route.icon"></i>{{route.title}}
      </template>
    </el-submenu>

    <el-submenu index="1">
      <template slot="title"><i class="el-icon-message"></i>导航一</template>
      <el-menu-item-group>
        <template slot="title">分组一</template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-4">
        <template slot="title">选项4</template>
        <el-menu-item index="1-4-1">选项4-1</el-menu-item>
      </el-submenu>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    routers () {
      return this.$router.options.routes
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(this.$router.options.routes)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>

</style>
