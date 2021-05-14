import {AppComponent} from '@core/AppComponent'

export class Modal extends AppComponent {
  static className ='modal'
  static tagName = 'div'
  constructor($root, options) {
    super($root, {
      name: 'Modal',
      ...options
    })
  }
}
