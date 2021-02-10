import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import { reject } from 'core-js/fn/promise'
// import { reject, resolve } from 'core-js/fn/promise'
// const cart = window.localStorage.getItem('cart')
Vue.use(Vuex)
// Vue.use(axios)
export default new Vuex.Store({
  state: {
    detail: []
  },
  getters: {
    data (state) {
      return state.detail
    }
  },
  mutations: {
    SET_DATA_FROM_API (state, payload) {
      state.detail = payload
    }
  },
  actions: {
    get_data_from_api ({ commit }, payload) {
      console.log('acton', payload)
      return new Promise((resolve, reject) => {
        axios.get('https://swapi.dev/api/' + payload)
          .then(response => {
            commit('SET_DATA_FROM_API', response.data)
            console.log(response)
            resolve(response.data)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    detailOfPeople ({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios.get('https://swapi.dev/api/people/' + payload)
          .then(response => {
            commit('SET_DATA_FROM_API', response.data)
            console.log(response)
            resolve(response.data)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  }
})
// element at postition i with element wtih current index
