import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

// component改为箭头函数实现组件异步加载  当app.js很小的时候没必要用组件的异步加载  因为
// 每加载一次js就会多一次http请求
//其他的子组件都可以实现异步的加载

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
    // component: () => import('@/pages/home/Home')
  }, {
    path: '/city',
    name: 'City',
    component: City
    // component: () => import('@/pages/city/City')
  }, {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
    // component: () => import('@/pages/detail/Detail')
  }],
  // 防止首页之前滚动到哪里之后进别的页面也是到之前滚动的高度地方
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
