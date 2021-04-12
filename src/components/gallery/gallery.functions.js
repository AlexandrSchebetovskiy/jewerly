import {Modal} from '@/components/modal/Modal';

import {$} from '@core/dom'
export function createGalleryModal(id, data) {
  const $root = $('.gallery')

  const $el = $.create(Modal.tagName, Modal.className)
  const modal = new Modal($el, id, data)
  console.log($root);
  $el.html(modal.toHTML())
  $root.append($el)
  modal.init()
  window.onscroll = () => {
    window.scrollTo(0, 0)
  }
}
