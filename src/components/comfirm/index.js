import Confirm from './confirm.vue'
import ConfirmFunc from './function'
export default (Vue) => {
  Vue.component(Confirm.name, Confirm)
  Vue.prototype.$confirm = ConfirmFunc
}
