<template>
  <i :class="'el-icon-ant-menu' + isActive" @click="OnOff"></i>
</template>

<script>
export default {
  name: 'onoff',
  computed: {
    isActive () {
      return this.$store.state.app.sidebar.status ? ' is-active' : ''
    }
  },
  methods: {
    OnOff () {
      this.$store.dispatch('changeSidebar')
    }
  }
}
</script>

<style scoped>
.el-icon-ant-menu {
  font-size: 25px;
  display: inline-block;
  cursor: pointer;
  transform: rotate(0deg);
  transition: .38s;
  transform-origin: 50% 50%;
}

.el-icon-ant-menu.is-active {
  transform: rotate(90deg);
}
</style>
