<template>
  <div>
    <navbar/>
    <Sidebar/>
    <Main/>
  </div>
</template>

<script>
import { Sidebar, Navbar, Main } from './'

export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    Main
  }
}
</script>

<style scoped>

</style>
