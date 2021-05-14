import {getTotalPrice} from '../header/header.functions'
import {Modal} from './Modal'
import {$} from '@core/dom'

export class OrderModal extends Modal {
  constructor($root) {
    super($root, {
      listeners: ['click']
    })
    this.onClick = this.onClick.bind(this)
  }
  toHTML() {
    return `
    <div class="order-modal__wrap">
      <form action="/" method="POST" class="order-modal__form form">
        <input type="text" required name="user-name"
        class="form__input" placeholder="Your Name">

        <input type="email" required name="user-mail"
        class="form__input"  placeholder="Your E-Mail">

        <input type="number" id="telephone" required name="user-phone"
        class="form__input"  placeholder="Your Tel">

        <input id="subject" type="text" name="user-adress"
        class="form__input"placeholder="Your Adress">

        <input id="subject" type="text" name="user-promo"
        class="form__input"placeholder="Promo code">

        <div class="order-modal__price">${getTotalPrice()}.00 $</div>
        <button type="submit"class="form__button">Order</button>
      </form>
      
    </div>
    
    `
  }
  onClick(event) {
    const $target = $(event.target)
    if ($target.is('modal')) {
      console.log($target);
      this.destroy()
      this.$root.delete()
      window.onscroll = () =>{}
    }
  }
}