import Vue from 'vue'
import Vuex from 'vuex'
import { auth, usersCollection } from '../util/firebase'
import router from '../router/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userProfile: {}
  },
  mutations: {
    setUserProfile(state, val) {
      state.userProfile = val

    }
  },
  actions: {
    async login({ dispatch }, form) {
      //sign in user
      const { user } = await auth.signInWithEmailAndPassword(form.email, form.password)
      //fetch user profile and set state
      dispatch('fetchUserProfile', user)
    },
    async fetchUserProfile({ commit }, user) {
      // fetch user profile
      const userProfile = await usersCollection.doc(user.id).get()
      //set user profile to state
      commit('setUserProfile', userProfile.data())
      // navigate to dashboard
      router.push('/')
    },

  },
  modules: {
  }
})
