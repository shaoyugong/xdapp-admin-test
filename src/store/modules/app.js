import Cookies from 'js-cookie'

const app = {
  state: {
    sidebar: {
      status: !+Cookies.get('sidebarStatus')
    }
  },
  mutations: {
    CHANGE_SIDEBAR: (state) => {
      if (state.sidebar.status) {
        Cookies.set('sidebarStatus', 1)
      } else {
        Cookies.set('sidebarStatus', 0)
      }

      state.sidebar.status = !state.sidebar.status
    }
  },
  actions: {
    changeSidebar ({ commit }) {
      commit('CHANGE_SIDEBAR')
    }
  }
}

export default app
