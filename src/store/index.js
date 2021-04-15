import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: () => {
    return {
      data: [],
      no: 0,
      score: 0,
      isFirstTime: true
    }
  },
  mutations: {
    setData (state, payload) {
      state.data = payload
    },
    setQuestion (state) {
      state.no += 1
    },
    setResetQuestion (state) {
      state.no = 0
    },
    setScore (state, payload) {
      state.score += payload
    },
    setResetScore (state) {
      state.score = 0
    },
    setIsFirstTime (state, payload) {
      state.isFirstTime = payload
    }
  },
  actions: {
    getData (context, data) {
      axios.get('https://restcountries.eu/rest/v2/all?fields=name;capital;flag').then(result => {
        context.commit('setData', result.data)
      }).catch(err => console.log(err))
    },
    changeQuestion (context) {
      context.commit('setQuestion')
    },
    resetQuestion (context) {
      context.commit('setResetQuestion')
    },
    addScore (context, data) {
      context.commit('setScore', data)
    },
    resetScore (context) {
      context.commit('setResetScore')
    },
    isFirstTime (context, data) {
      context.commit('setIsFirstTime', data)
    }
  },
  getters: {
    exData (state) {
      return state.data
    },
    exNo (state) {
      return state.no
    },
    exScore (state) {
      return state.score
    },
    exFirst (state) {
      return state.isFirstTime
    }
  }
})
