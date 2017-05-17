import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Hello = resolve => require(['./../components/Hello'], resolve)
const notFound = resolve => require(['./../pages/404'], resolve)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      //  没有匹配路由
      path: '*',
      name: '404',
      component: notFound
    }
  ]
})
