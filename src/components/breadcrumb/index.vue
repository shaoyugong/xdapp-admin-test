<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(item, index) in breadcrumb" :key="item.path">
      <a v-if="index < breadcrumb.length - 1" :href="item.path">{{ $t('route.' + item.meta.title) }}</a>
      <span v-else>{{ $t('route.' + item.meta.title) }}</span>
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
