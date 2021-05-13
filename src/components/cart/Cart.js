import {AppComponent} from '@core/AppComponent'
import {getCartTemplate} from './getCartTemplate'

export class Cart extends AppComponent {
    static className ='Cart'
    static tagName = 'section'

    constructor($root, options) {
      super($root, {
        name: 'Cart',
        ...options
      })
      this.data = options.data
    }

    toHTML() {
      return `
      <div class="container">
        <h2 class="cart__title">Your cart</h2>
        <div class="cart__wrap">
          ${getCartTemplate(this.data)}
        </div>
      </div>
      `
    }
}
