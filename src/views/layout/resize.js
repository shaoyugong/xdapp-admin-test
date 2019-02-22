import store from '@/store'

const { body } = document
const PATH_WIDTH = 1024

export default {
  beforeMount () {
    window.addEventListener('resize', this.deviceAdapter)
  },
  mounted () {
    this.deviceAdapter()
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.deviceAdapter)
  },
  methods: {
    deviceAdapter () {
      const page = body.getBoundingClientRect()

      if (page.width < PATH_WIDTH) {
        store.dispatch('changeDevice', 'mobile')
        this.$store.dispatch('changeSidebar')
      } else {
        store.dispatch('changeDevice', 'pc')
      }
    }
  }
}
