/**
 * mudoleA的请求
 */
import Vue from 'vue'
import vueResource from 'vue-resource'
import {SET_HEADER_U} from './middleware'
import { HOST_NAME } from './../config'

Vue.use(vueResource)

Vue.http.options.crossOrigin = true
Vue.http.interceptors.push(SET_HEADER_U)

export const POST_TEST = function (data, option) {
  console.log(data)
  console.log(Vue.resource)
  return Vue.http.post(HOST_NAME + '/post', data, {

  })
}
