import {Modal} from './Modal'
import {$} from '@core/dom'
export class GetCardModal extends Modal {
  constructor($root) {
    super($root, {
      listeners: ['click']
    })
    this.onClick = this.onClick.bind(this)
  }
  toHTML() {
    return `
    <div class="get-card-modal__wrap">
      <form action="/getcard" method="POST" class="order-modal__form form">
        <input type="text" required name="user-name"
        class="form__input" placeholder="Your Name">
        <input type="email" required name="user-mail"
        class="form__input"  placeholder="Your E-Mail">
        <input type="number" id="telephone" required name="user-phone"
        class="form__input"  placeholder="Your Tel">
        <button type="submit"class="form__button">Get Discount card</button>
      </form>
    </div>
    `
  }
  onClick(event) {
    const $target = $(event.target)
    if ($target.is('modal')) {
      this.destroy()
      this.$root.delete()
      window.onscroll = () =>{}
    }
  }
}
