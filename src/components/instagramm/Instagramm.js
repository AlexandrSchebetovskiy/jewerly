import {AppComponent} from '@core/AppComponent'
import {getInstTemplate} from './inst.template'

export class Instagramm extends AppComponent {
  static className = 'instagram'
  static tagName = 'div'
  constructor($root, options) {
    super($root, {
      name: 'Instagram',
      ...options
    })
    this.data = options.data
  }
  toHTML() {
    return `
    <div class="container">
      <h3 class="instagram__title">Follow us on Instagramm</h3>
    </div>
    <div class="instagram__wrap">
      ${getInstTemplate(this.data)}
    </div>
    `
  }
}
