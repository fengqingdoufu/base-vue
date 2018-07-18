// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import 'lib-flexible'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastClick from 'fastclick'
import 'common/scss/reset.scss'
import 'common/scss/border.css'
import Notification from './components/notification'
import Comfirm from './components/comfirm'
import Toast from './components/toast'
Vue.config.productionTip = false
fastClick.attach(document.body)
/* eslint-disable no-new */
Vue.use(Notification)
Vue.use(Comfirm)
Vue.use(Toast)
let supportTouch = 'deviceready' in window
// console.log(supportTouch)
if (supportTouch) {
  document.addEventListener('deviceready', function () {
    new Vue({
      el: '#app',
      router,
      store,
      components: { App },
      template: '<App/>'
    })
    window.navigator.splashscreen.hide()
  }, false)
} else {
  new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
  })
}
