import {AppComponent} from '@core/AppComponent'
import {bestsellersTemplate} from './bestsellers.template'

export class Bestsellers extends AppComponent {
  static className ='bestsellers'
  static tagName = 'div'
  constructor($root, {bestsellers}) {
    super($root, {
      name: 'Bestsellers'
    })
    this.data = bestsellers
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
}

