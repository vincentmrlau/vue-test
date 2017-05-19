'use strict'
import routers from './../../router'
import * as types from './../type'
import { POST_TEST } from './../../api/moduleA'

const moduleA = {
  state: {
    port: 8080
  },
  getters: {
    getPort: (state) => state.port
  },
  mutations: {
    changePort: (state, payload = {
      port: 8082
    }) => {
      console.log(payload.port)
      state.port = payload.port
    }
  },
  actions: {
    [types.CHANGE_NAV]: () => {
      routers.push('222')
    },
    [types.ACTION_A]: ({commit, dispatch}) => {
      return new Promise((resolve, reject) => {
        console.log('action a')
        commit('changePort', {port: 600})
        resolve()
      })
    },
    [types.ACTION_B]: ({commit, dispatch}) => {
      return dispatch({
        type: types.ACTION_A
      }).then(() => {
        console.log('ACTION_BBBBBB')
        POST_TEST()
      })
    }

  }
}

export default moduleA
