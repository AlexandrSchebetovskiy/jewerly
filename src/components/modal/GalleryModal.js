import {Modal} from './Modal'

export class GalleryModal extends Modal {
  constructor($root, id, data) {
    super($root)
    this.data = data
    this.id = id
  }
  toHTML() {
    let current
    this.data.forEach(item => {
      if (item.id == this.id) {
        current = item
      }
    })
    return `
    <div class="modal__wrap">
      <div class="modal__title">${current.name}</div>
      <div class="modal__img">
        <img class="modal__image" src=${current.img} alt="">
      </div>
      <div class="modal__close">
        <span id="first"></span>
        <span id="second"></span>
      </div>
    </div>
    `
  }
}
