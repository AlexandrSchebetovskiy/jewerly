import {AppComponent} from '@core/AppComponent'
import {$} from '@core/dom'
import {getCount} from './header.functions'

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
    this.emitter.subscribe('item', (id, data, isPush) => {
      console.log('emitter', id)
      console.log(data)
      const count = $('#count')
      if (isPush) {
        const counter = count.text()
        count.text(+counter+1)
      } else {
        const counter = count.text()
        count.text(+counter-1)
      }
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
            <li class="menu__item"><a href="#gallery">galerry</a></li>
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
      <div class="cart-header__sum">- 0.00 $</div>
    </div>
    </a>
    `
  }
}


