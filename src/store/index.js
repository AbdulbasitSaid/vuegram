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
      console.log(user);

      //fetch user profile and set state
      dispatch('fetchUserProfile', user)
    },
    async signup({ dispatch }, form) {
      // sign user up
      const { user } = await auth.createUserWithEmailAndPassword(form.email, form.password)

      // create user profile object in userCollections
      await usersCollection.doc(user.uid).set({
        name: form.name,
        title: form.title
      })

      // fetch user profile and set in state
      dispatch('fetchUserProfile', user)
    },
    async fetchUserProfile({ commit }, user) {
      console.log(user);

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
