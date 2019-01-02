import Cookies from 'js-cookie'

const theme = {
  state: {
    color: Cookies.get('themeColor') || 'red'
  },
  mutations: {
    CHANGE_THEME: (state, color) => {
      state.color = color
      Cookies.set('themeColor', color)
    }
  },
  actions: {
    changeTheme ({ commit }, color) {
      commit('CHANGE_THEME', color)
    }
  }
}

export default theme
