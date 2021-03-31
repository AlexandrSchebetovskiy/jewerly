import {StorePageComponent} from
  '@/components/PageComponents/StorePageComponent';
import {Page} from '@core/Page'
import {Header} from '@/components/header/Header'
import {Footer} from '@/components/footer/Footer'
import {Store} from '@/components/store/Store'

export class StorePage extends Page {
  static url = 'server/Store.json'
  constructor(data = {}) {
    super()
    this.data = data
  }
  getRoot() {
    this.store = new StorePageComponent({
      components: [Header, Store, Footer],
      data: this.data
    })
    return this.store.getRoot()
  }
  afterRender() {
    console.log('afterRender');
    this.store.init()
  }
  destroy() {
    this.store.destroy()
  }
}
