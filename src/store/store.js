import { createStore } from 'vuex'

export default createStore({
  state: {
    test: "cc",
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

