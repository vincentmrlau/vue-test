// 组装 vuex 模块并导出store
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getter'
import moduleA from './modules/moduleA'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
      console.log(state.count)
    }
  },
  getters,
  modules: {
    a: moduleA
  },
  debug
})
