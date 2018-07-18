import Toast from './toast'
import ToastFun from './function'
export default (Vue) => {
  Vue.component(Toast.name, Toast)
  Vue.prototype.$toast = ToastFun
}
