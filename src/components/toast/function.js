import Vue from 'vue'
import Component from './func-toast'
const ToastConstructor = Vue.extend(Component)
const instances = []

const ToastFun = (options) => {
  const len = instances.length
  console.log(len)
  if (len > 0) {
    document.body.removeChild(instances[0].vm.$el)
    instances[0].vm.$destroy()
    instances.length = 0
  }
  const {autoClose, ...rest} = options
  const instance = new ToastConstructor({
    propsData: {
      ...rest
    },
    data: {
      autoClose: autoClose === undefined ? 1500 : autoClose
    }
  })
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  instance.vm.visible = true
  instances.push(instance)
  instance.vm.$on('closed', () => {
    document.body.removeChild(instance.vm.$el)
    instance.vm.$destroy()
    instances.length = 0
  })
}
export default ToastFun
