/* eslint-disable prefer-promise-reject-errors */
import Vue from 'vue'
import Component from './func-confirm'
const ConfirmConstructor = Vue.extend(Component)
const comfirmFunc = (options) => {
  const instance = new ConfirmConstructor({
    propsData: options
  })
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  instance.vm.visible = true
  instance.vm.$on('closed', () => {
    document.body.removeChild(instance.vm.$el)
    instance.vm.$destroy()
  })

  return new Promise((resolve, reject) => {
    instance.vm.$on('cancel', () => {
      instance.vm.visible = false
      reject('')
    })
    instance.vm.$on('confirm', () => {
      instance.vm.visible = false
      resolve()
    })
  })
}
export default comfirmFunc
