import {Modal} from '@/components/modal/Modal'
import {GalleryModal} from '@/components/modal/GalleryModal'


import {$} from '@core/dom'
export function createGalleryModal(id, data) {
  const $root = $('.gallery')

  const $el = $.create(Modal.tagName, Modal.className)
  const modal = new GalleryModal($el, id, data)
  console.log($root);
  $el.html(modal.toHTML())
  $root.append($el)
  modal.init()
  window.onscroll = () => {
    window.scrollTo(0, 0)
  }
}
