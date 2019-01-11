<template>
  <div class="main-container">
    <transition name="el-fade-in" mode="out-in">
      <router-view :key="key"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Main',
  computed: {
    key () {
      return this.$route.fullPath
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
// 内容栏
.main-container {
  margin: 0px 10px 10px 10px;
}
</style>
