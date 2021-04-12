import {AppComponent} from '@core/AppComponent'
import {$} from '@core/dom'
export class Modal extends AppComponent {
  static className ='modal'
  static tagName = 'div'
  constructor($root, options) {
    super($root, {
      name: 'Modal',
      listeners: ['click'],
      ...options
    })
    this.onClick = this.onClick.bind(this)
  }
  onClick(event) {
    const el= $(event.target)
    if (!el.is('modal__image') || el.is('modal__close')) {
      this.destroy()
      this.$root.delete()
      window.onscroll = () =>{}
    }
  }
}
