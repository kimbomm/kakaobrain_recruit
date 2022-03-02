import Vue from 'vue'

function scrollControl(el, method) {
  switch (method) {
    case 'block':
      bodyScrollLock.disableBodyScroll(el)
      break
    case 'enable':
      bodyScrollLock.enableBodyScroll(el)
      break
    default:
      bodyScrollLock.clearAllBodyScrollLocks()
      break
  }
}
Vue.prototype.scrollControl = scrollControl

export default {
  scrollControl
}
