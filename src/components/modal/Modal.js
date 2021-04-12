import {AppComponent} from '@core/AppComponent'
import {$} from '@core/dom'
export class Modal extends AppComponent {
  static className ='modal'
  static tagName = 'div'
  constructor($root, id, data) {
    super($root, {
      name: 'Modal',
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
  onClick(event) {
    const el= $(event.target)
    if (!el.is('modal__image') || el.is('modal__close')) {
      this.destroy()
      this.$root.delete()
      window.onscroll = () =>{}
    }
  }
}
