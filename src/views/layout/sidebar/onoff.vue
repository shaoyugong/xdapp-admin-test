<template>
  <div>
    <i :class="'el-icon-ant-menu' + isActive" @click="OnOff"></i>
  </div>
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
  line-height: 60px;
  font-size: 35px;
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
