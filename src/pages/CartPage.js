import {Page} from '@core/Page'
import {Header} from '@/components/header/Header'
import {Footer} from '../components/footer/Footer'
import {Cart} from '../components/cart/Cart'
import {CartPageComponent} from '@/components/PageComponents/CartPageComponent'
export class CartPage extends Page {
  static url = '/server/Store.json'
  constructor(data = {}) {
    super()
    this.data = data
  }
  getRoot() {
    this.about = new CartPageComponent({
      components: [
        Header, Cart, Footer
      ],
      data: this.data
    })
    return this.about.getRoot()
  }
  afterRender() {
    this.about.init()
  }
  destroy() {
    this.about.destroy()
  }
}
