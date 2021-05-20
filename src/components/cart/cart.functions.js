import {$} from '@core/dom'
import {Modal} from '../modal/Modal'
import {OrderModal} from '../modal/OrderModal'

export function createOrderModal(data) {
  const $root = $('.cart')

  const $el = $.create(Modal.tagName, Modal.className)
  const modal = new OrderModal($el, data)
  $el.html(modal.toHTML())
  $root.append($el)
  modal.init()
  window.onscroll = () => {
    window.scrollTo(0, 0)
  }
}
