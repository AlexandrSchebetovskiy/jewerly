import {Modal} from './Modal'
import {$} from '@core/dom'
export class GalleryModal extends Modal {
  constructor($root, id, data) {
    super($root, {
      listeners: ['click']
    })
    this.data = data
    this.id = id

    this.onClick = this.onClick.bind(this)
  }
  toHTML() {
    let current
    this.data.forEach(item => {
      if (item.id == this.id) {
        current = item
      }
    })
    return `
    <div class="galery-modal__wrap">
      <div class="galery-modal__title">${current.name}</div>
      <div class="galery-modal__img">
        <img class="galery-modal__image" src=${current.img} alt="">
      </div>
      <div class="galery-modal__close">
        <span id="first"></span>
        <span id="second"></span>
      </div>
    </div>
    `
  }
  onClick(event) {
    const el= $(event.target)
    if (!el.is('galery-modal__image') || el.is('galery-modal__close')) {
      this.destroy()
      this.$root.delete()
      window.onscroll = () =>{}
    }
  }
}
