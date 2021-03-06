import { createStore } from 'vuex'

export default createStore({
  state: {
    admin: {
        name: "Nispeon",
        who: "Web Developer",
        avatar: "https://cdn.discordapp.com/attachments/427932875837669389/817558129562222592/717151043418325013.gif"
    },
    tarray: []
  },
  mutations: {
      ADD_DATA(state, data) {
          state.tarray.push(data)
      }
  },
  actions: {
  },
  modules: {
  }
})

