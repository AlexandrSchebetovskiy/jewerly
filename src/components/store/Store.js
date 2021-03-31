import {AppComponent} from '@core/AppComponent'
import {getStoreTemplate} from './store.template'

export class Store extends AppComponent {
  static className ='store'
  static tagName = 'section'

  constructor($root, store) {
    super($root, {
      name: 'Store'
    })
    this.store = store
  }

  toHTML() {
    return `
    <div class="container">
      <h2 class="store__title">store</h2>
      <ul class="store__nav">
        <li class="store__nav-item">Filter all</li>
        <li class="store__nav-item">necklaces</li>
        <li class="store__nav-item">earings</li>
        <li class="store__nav-item">rings</li>
        <li class="store__nav-item">watches</li>
        <li class="store__nav-item">braceletes</li>
      </ul>
      <div class="store__grid">
       ${getStoreTemplate(this.store)}
      </div>
    </div>>
    `
  }
}
