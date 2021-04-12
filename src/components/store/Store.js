import {AppComponent} from '@core/AppComponent'
import {getStoreTemplate} from './store.template'
import {filterItems} from '@core/utils'
import {LocalStorageUtil} from '@core/LocalStorageUtil'
import {$} from '@core/dom'

export class Store extends AppComponent {
  static className ='store'
  static tagName = 'section'

  constructor($root, store) {
    super($root, {
      name: 'Store',
      listeners: ['click']
    })
    this.store = store
  }

  toHTML() {
    return `
    <div class="container">
      <h2 class="store__title">store</h2>
      <ul class="store__nav">
        <li class="store__nav-item"data-type="all">Filter all</li>
        <li class="store__nav-item"data-type="necklaces">necklaces</li>
        <li class="store__nav-item"data-type="earings">earings</li>
        <li class="store__nav-item"data-type="rings">rings</li>
        <li class="store__nav-item"data-type="watches">watches</li>
        <li class="store__nav-item"data-type="braceletes">braceletes</li>
      </ul>
      <div class="store__grid">
       ${getStoreTemplate(this.store)}
      </div>
    </div>>
    `
  }
  onClick(event) {
    const target = $(event.target)
    if (target.is('store__nav-item')) {
      const button = $(event.target)
      const type = button.data.type
      filterItems(type, 'store')
      return
    }
    if (target.is('store__button')) {
      const item = target.closest('[data-id]')
      const id = item.data.id
      const storage = new LocalStorageUtil()
      storage.putProducts(id)
      this.emmitter.emit('item', id)
      return
    }
  }
}
