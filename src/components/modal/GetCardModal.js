import {Modal} from './Modal'
import {$} from '@core/dom'
export class GetCardModal extends Modal {
  constructor($root) {
    super($root, {
      listeners: ['click', 'submit']
    })
    this.onClick = this.onClick.bind(this)
  }
  toHTML() {
    return `
    <div class="get-card-modal__wrap">
      <form action="/getcard" method="POST" class="order-modal__form form">
        <input type="text" required name="name"
        class="form__input" placeholder="Your Name">
        <input type="email" required name="mail"
        class="form__input"  placeholder="Your E-Mail">
        <input type="number" id="telephone" required name="phone"
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
  async onSubmit(event) {
    event.preventDefault()
    const inputs = event.target.querySelectorAll('[name]')
    // eslint-disable-next-line prefer-const
    let formData = {}
    inputs.forEach(i => {
      formData[i.name] = i.value
    })
    console.log(formData)
    try {
      const response = await fetch('/getcard', {
        method: 'POST', // или 'PUT'
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const json = await response.json();
      console.log('Успех:', JSON.stringify(json));
    } catch (error) {
      console.error('Ошибка:', error);
    }
  }
}
