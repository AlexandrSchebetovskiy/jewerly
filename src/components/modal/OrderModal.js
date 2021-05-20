import {getTotalPrice} from '../header/header.functions'
import {Modal} from './Modal'
import {$} from '@core/dom'

export class OrderModal extends Modal {
  constructor($root, data) {
    super($root, {
      listeners: ['click', 'submit']
    })
    this.data = data
    this.onClick = this.onClick.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  toHTML() {
    return `
    <div class="order-modal__wrap">
      <form action="/order" method="POST"class="order-modal__form form">
        <input type="text" required name="name"
        class="form__input" placeholder="Your Name">

        <input type="email" required name="mail"
        class="form__input"  placeholder="Your E-Mail">

        <input type="number" id="telephone" required name="phone"
        class="form__input"  placeholder="Your Tel">

        <input id="adress" type="text" name="adress"
        class="form__input"placeholder="Your Adress">

        <input id="promo" type="text" name="promo"
        class="form__input"placeholder="Promo code">

        <div class="order-modal__price">${getTotalPrice()}.00 $</div>
        <button type="submit" class="form__button">Order</button>
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

  async onSubmit(event) {
    event.preventDefault()
    console.log(event.target)
    // eslint-disable-next-line prefer-const
    let dataCart = []
    this.data.forEach(i => {
      const item = {id: i.id, name: i.name, count: i.count}
      dataCart.push(item)
    })
    const inputs = event.target.querySelectorAll('[name]')
    // eslint-disable-next-line prefer-const
    let formData = {}
    inputs.forEach(i => {
      formData[i.name] = i.value
    })
    const postData = {...formData, dataCart}
    try {
      const response = await fetch('/order', {
        method: 'POST', // или 'PUT'
        body: JSON.stringify(postData),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const json = await response.json();
      console.log('Успех:', JSON.stringify(json))
    } catch (error) {
      console.error('Ошибка:', error);
    }
  }
}

