// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App'
import router from './router'

// 解决click点击有300ms延迟的问题
import fastClick from 'fastclick'
import store from './store'

import 'styles/reset.css'
// 解决1像素的问题
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  store,
  components: { App: App },
  template: '<App/>'
})

// 路由就是根据网址的不同，返回不同的内容和用户
