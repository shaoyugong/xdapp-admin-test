<template>
  <el-menu
    router
    :show-timeout="200"
    :default-active="this.$route.path"
    :collapse="this.$props.isCollapse"
    @open="handleOpen"
    @close="handleClose"
    mode="vertical"
    background-color="#304156"
    text-color="#bfcbd9"
    active-text-color="#ffd04b">

    <template v-for="route in routers">
      <el-submenu v-if="!route.hidden" :key="route.path" :base-path="route.path" :index="route.path">
        <template slot="title">
          <i :class="route.icon"></i><span slot="title">{{route.title}}</span>
        </template>

        <template v-for="child in route.children" v-if="!child.hidden">
            <el-menu-item :key="child.path" :index="child.path" class="nest-menu">{{child.title}}</el-menu-item>
        </template>
      </el-submenu>
    </template>
  </el-menu>
</template>

<script>
export default {
  name: 'index',
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
