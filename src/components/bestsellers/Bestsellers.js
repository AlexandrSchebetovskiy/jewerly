import {AppComponent} from '@core/AppComponent'
import {bestsellersTemplate} from './bestsellers.template'
import {$} from '@core/dom'
import {handleSetLocationStorage} from '@/components/store/store.functions'
export class Bestsellers extends AppComponent {
  static className ='bestsellers'
  static tagName = 'div'
  constructor($root, options) {
    super($root, {
      name: 'Bestsellers',
      listeners: ['click'],
      ...options
    })
    this.emitter = options.emitter
    this.data = options.data.bestsellers
    this.onClick = this.onClick.bind(this)
  }
  toHTML() {
    return `
    <div class="container">
      <h2 class="bestsellers__title">best sellers</h2>
      <div class="bestsellers__wrap">
        ${bestsellersTemplate(this.data)}
      </div>
    </div>
    `
  }
  onClick(event) {
    const $target = $(event.target)
    if ($target.is('card__button')) {
      const id = $target.data.id
      const product = this.data.filter(i => i.id === id)[0]
      const newCart = handleSetLocationStorage(event.target,
          {...product, count: 1})
      this.emitter.emit('item', newCart.products)

      const curURL = window.location.href
      const newURL = curURL.split('/#')[0] + '#cart'
      window.location = newURL
    }
  }
}

