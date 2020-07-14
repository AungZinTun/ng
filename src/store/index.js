import Vue from 'vue'
import Vuex from 'vuex'
import pathify from 'vuex-pathify'
import * as modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules,

  state: {
    drawer: false,
    links: [
      'Home',
      'About Us',
      'Articles',
      'Jobs',
      'Meeting',
      'Publications',
      'Contact',
      'Pricing',
    ],
  },

  mutations: {
    SET_DRAWER (state, payload) {
      state.drawer = payload
    },
  },

  plugins: [pathify.plugin],
})
