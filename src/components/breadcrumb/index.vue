<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="item in breadcrumb" :key="item.path" :to="item.path || item.redirect">
      <span>{{ $t('route.' + item.meta.title) }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  name: 'breadcrumb',
  data () {
    return {
      breadcrumb: null
    }
  },
  watch: {
    $route () {
      this.matchedRouters()
    }
  },
  created () {
    this.matchedRouters()
  },
  methods: {
    matchedRouters () {
      this.breadcrumb = this.$route.matched
    }
  }
}
</script>

<style scoped>
.el-breadcrumb {
  display: inline-block;
}
</style>
