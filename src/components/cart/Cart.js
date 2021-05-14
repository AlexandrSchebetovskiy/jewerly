import {AppComponent} from '@core/AppComponent'
import {getCartTemplate} from './getCartTemplate'
import {$} from '@core/dom'
import {getTotalPrice} from '../header/header.functions'
import {localStorageUtil} from '@core/LocalStorageUtil'
export class Cart extends AppComponent {
    static className ='Cart'
    static tagName = 'section'

    constructor($root, options) {
      super($root, {
        name: 'Cart',
        listeners: ['click'],
        ...options
      })
      this.emitter = options.emitter
      this.onClick = this.onClick.bind(this)
    }

    toHTML() {
      return `
      <div class="container">
        <h2 class="cart__title">Your cart</h2>
        <div class="cart__wrap">
          ${getCartTemplate()}
        </div>
        <div class="cart__total">${getTotalPrice()}.00 $</div>
        <button class="cart__order">Order</button>
      </div>
      `
    }
    onClick(event) {
      const $target = $(event.target)
      if ($target.is('cart__btn')) {
        const id = $target.data.id
        localStorageUtil.removeOne(id)
        const cartWrap = $('.cart__wrap')
        const priceTotal = $('.cart__total')
        const template = getCartTemplate()
        const price = getTotalPrice()
        console.log(price)
        priceTotal.text(price+'.00 $')
        cartWrap.html(template)
        const newCart = localStorageUtil.getProducts()
        this.emitter.emit('item', newCart)
      }
    }
}
