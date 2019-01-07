import Cookies from 'js-cookie'

const app = {
  state: {
    sidebar: {
      status: Boolean(Cookies.get('sidebarStatus'))
    }
  },
  mutations: {
    SIDEBAR_STATUS: (state) => {
      if (state.sidebar.status) {
        state.sidebar.status = false
      } else {
        state.sidebar.status = true
      }
      Cookies.set('sidebarStatus', state.sidebar.status)
    }
  },
  actions: {
    changeSidebar ({ commit }) {
      commit('SIDEBAR_STATUS')
    }
  }
}

export default app
