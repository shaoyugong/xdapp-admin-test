import Cookies from 'js-cookie'

const app = {
  state: {
    sidebar: {
      status: !+Cookies.get('sidebarStatus')
    },
    device: 'pc'
  },
  mutations: {
    CHANGE_SIDEBAR: (state) => {
      if (state.sidebar.status) {
        Cookies.set('sidebarStatus', 1)
      } else {
        Cookies.set('sidebarStatus', 0)
      }

      state.sidebar.status = !state.sidebar.status
    },
    CHANGE_DEVICE: (state, device) => {
      state.device = device
    }
  },
  actions: {
    changeSidebar ({ commit }) {
      commit('CHANGE_SIDEBAR')
    },
    changeDevice ({ commit }, device) {
      commit('CHANGE_DEVICE', device)
    }
  }
}

export default app
