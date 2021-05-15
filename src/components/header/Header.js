import {AppComponent} from '@core/AppComponent'
import {$} from '@core/dom'
import {getCount, getTotalPrice} from './header.functions'

export class Header extends AppComponent {
  static className ='header'
  static tagName = 'header'

  constructor($root, options) {
    super($root, {
      name: 'Header',
      ...options
    })
    this.emitter = options.emitter
  }
  init() {
    super.init()
    this.emitter.subscribe('item', cart => {
      const counter = $('#count')
      const price = $('#price')
      let amount = 0
      let totalPrice = 0
      cart.forEach(i => {
        amount += i.count
        totalPrice += i.count*i.price
      })
      counter.text(amount)
      price.text(totalPrice + '.00 $')
    })
  }

  toHTML() {
    return `
    <div class="container">
      <div class="header__wrap">
        <div class="heder__logo">
          <img src="img/logo1.png" alt="logo">
        </div>
        <nav class="header__nav">
          <ul class="menu">
            <li class="menu__item"><a href="#home">home</a></li> 
            <li class="menu__item"><a href="#about">about us</a></li>
            <li class="menu__item"><a href="#store">store</a></li>
            <li class="menu__item"><a href="#gallery">gallery</a></li>
            <li class="menu__item"><a href="#blog">blog</a></li>
            <li class="menu__item"><a href="#contacts">contacts</a></li>
          </ul>
        </nav>
      </div>
    </div>
    <a href=#cart>
    <div class="cart-header">
      <div class="cart-header__img"><img src="img/cart.png" alt=""></div>
      <div class="cart-header__text">
      your cart: <span id="count">${getCount()}</span> item</div>
      <div class="cart-header__sum" id="price">${getTotalPrice()}.00 $</div>
    </div>
    </a>
    `
  }
}


