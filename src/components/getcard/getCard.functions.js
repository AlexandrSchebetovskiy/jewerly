import {$} from '@core/dom'
import {GetCardModal} from '../modal/GetCardModal'
import {Modal} from '../modal/Modal'
export function createGetCardModal() {
  const $root = $('.get-card')

  const $el = $.create(Modal.tagName, Modal.className)
  const modal = new GetCardModal($el)
  $el.html(modal.toHTML())
  $root.append($el)
  modal.init()
  window.onscroll = () => {
    window.scrollTo(0, 0)
  }
}
