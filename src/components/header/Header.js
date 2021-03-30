import {AppComponent} from '@core/AppComponent'

export class Header extends AppComponent {
  static className ='header'
  static tagName = 'header'

  constructor($root) {
    super($root, {
      name: 'Header'
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
    <div class="cart">
      <div class="cart__img"><img src="img/cart.png" alt=""></div>
      <div class="cart__text">your cart: 0 item</div>
      <div class="cart__sum">- 0.00 $</div>
    </div>
    `
  }
}


