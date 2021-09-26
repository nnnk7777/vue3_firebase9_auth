import { createStore } from "vuex";

export default createStore({
  state: {
    userData: null,
  },
  mutations: {
    setUser(state, val) {
      state.userData = val;
    },
  },
  actions: {
    handleSetUser({ commit }, user) {
      commit("setUser", user);
    },
  },
});
